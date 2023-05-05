import { useEffect, useRef, useState } from 'react';
import useRecentSearchWords from '@/hooks/useRecentSearchWords';
import useDebounce from '@/hooks/useDebounce';
import { searchAPI } from '@/services/search';
import { MAX_DISPLAYED } from '@/constants/searchWord';
import { DEFAULT_INDEX } from '@/constants/config';
import useKeyFocus from '@/hooks/useKeyFocus';
import SearchBar from './SearchBar/index';
import SearchWordBox from './SearchWordBox/index';

function SearchSection() {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isOnFocus, setIsOnFocus] = useState(false);
  const [autocompleteWords, setAutocompleteWords] = useState<SearchWordType[]>(
    [],
  );
  const wordBoxRef = useRef<HTMLDivElement>(null);

  const debouncedInputText = useDebounce(inputText);
  const { recentSearchWords, updateRecentSearchWords } = useRecentSearchWords();

  const { handleKeyDown, focusIndex, setFocusIndex } = useKeyFocus(
    autocompleteWords,
    isOnFocus,
    setIsOnFocus,
    setInputText,
  );

  const handleSearch = (searchInputText: string) => {
    if (searchInputText.trim().length === 0) return;
    updateRecentSearchWords(searchInputText);

    setIsOnFocus(false);
    if (wordBoxRef.current) wordBoxRef.current.className = 'hidden';
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    const fetchAutocompleteWords = async () => {
      setIsLoading(true);
      const words = await searchAPI(debouncedInputText.trim().toLowerCase());
      setIsLoading(false);
      setFocusIndex(DEFAULT_INDEX);
      setAutocompleteWords(words.slice(0, MAX_DISPLAYED));
    };

    fetchAutocompleteWords();
  }, [debouncedInputText, setFocusIndex]);

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
          onSearch={handleSearch}
          setInputText={setInputText}
        />

        <div ref={wordBoxRef} className={isOnFocus ? '' : 'opacity-0'}>
          <SearchWordBox
            isLoading={isLoading}
            inputText={inputText}
            debouncedInputText={debouncedInputText}
            setInputText={setInputText}
            recentSearchWords={recentSearchWords}
            onSearch={handleSearch}
            autocompleteWords={autocompleteWords}
            focusIndex={focusIndex}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
