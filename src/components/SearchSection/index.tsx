import { useCallback, useEffect, useRef, useState } from 'react';
import useRecentSearchWords from '@/hooks/useRecentSearchWords';
import useDebounce from '@/hooks/useDebounce';
import { searchAPI } from '@/services/search';
import { MAX_DISPLAYED } from '@/constants/searchWord';
import { DEFAULT_INDEX } from '@/constants/config';
import SearchBar from './SearchBar/index';
import SearchWordBox from './SearchWordBox/index';

function SearchSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputText, setInputText] = useState('');
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [focusIndex, setFocusIndex] = useState<number>(DEFAULT_INDEX);
  const { recentSearchWords, updateRecentSearchWords } = useRecentSearchWords();
  const [autocompleteWords, setAutocompleteWords] = useState<SearchWordType[]>(
    [],
  );

  const wordBoxRef = useRef<HTMLDivElement>(null);

  const debouncedInputText = useDebounce(inputText);

  const onSearch = (searchInputText: string) => {
    if (searchInputText.trim().length === 0) return;
    updateRecentSearchWords(searchInputText);

    setIsOnFocus(false);
    if (wordBoxRef.current) wordBoxRef.current.className = 'hidden';
  };

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOnFocus) return;
      if (e.isComposing) return;

      const currentData = autocompleteWords;
      if (e.key === 'ArrowDown') {
        e.preventDefault();

        setFocusIndex((currentIndex) =>
          currentIndex === currentData.length - 1
            ? currentIndex
            : currentIndex + 1,
        );
      }

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        setFocusIndex((currentIndex) =>
          currentIndex < 1 ? 0 : currentIndex === -1 ? -1 : currentIndex - 1,
        );
      }

      if (e.key === 'Enter') {
        setInputText(currentData[focusIndex].name);
        setIsOnFocus(false);
      }
    },
    [autocompleteWords, focusIndex, isOnFocus],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const fetchAutocompleteWords = async () => {
      setIsLoading(true);
      const words = await searchAPI(debouncedInputText.trim());
      setIsLoading(false);
      setFocusIndex(DEFAULT_INDEX);
      setAutocompleteWords(words.slice(0, MAX_DISPLAYED));
    };

    fetchAutocompleteWords();
  }, [debouncedInputText]);

  return (
    <section className="flex flex-col justify-center items-center pt-20 pb-40 w-full bg-skyblue">
      <h2 className="mb-10 text-center text-[2.125rem] font-bold leading-[1.6] text-black">
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </h2>

      <div
        onFocus={() => setIsOnFocus(true)}
        onBlur={() => setIsOnFocus(false)}
        className="relative w-full max-w-[490px]"
      >
        <SearchBar
          inputText={inputText}
          isOnFocus={isOnFocus}
          onSearch={onSearch}
          setInputText={setInputText}
        />

        <div ref={wordBoxRef} className={isOnFocus ? '' : 'opacity-0'}>
          <SearchWordBox
            isLoading={isLoading}
            inputText={inputText}
            debouncedInputText={debouncedInputText}
            setInputText={setInputText}
            recentSearchWords={recentSearchWords}
            onSearch={onSearch}
            autocompleteWords={autocompleteWords}
            focusIndex={focusIndex}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
