import { useRef, useState } from 'react';
import useRecentSearchWords from '@/hooks/useRecentSearchWords';
import SearchBar from './SearchBar';
import SearchWordBox from './SearchWordBox';

function SearchSection() {
  const [inputText, setInputText] = useState('');
  const [isOnFocus, setIsOnFocus] = useState(false);
  const { recentSearchWords, updateRecentSearchWords } = useRecentSearchWords();

  const wordBoxRef = useRef<HTMLDivElement>(null);

  const search = (searchInputText: string) => {
    updateRecentSearchWords(searchInputText);

    setIsOnFocus(false);
    if (wordBoxRef.current) wordBoxRef.current.className = 'hidden';
  };

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
          setInputText={setInputText}
          isOnFocus={isOnFocus}
          search={search}
        />

        <div ref={wordBoxRef} className={isOnFocus ? '' : 'opacity-0'}>
          <SearchWordBox
            inputText={inputText}
            setInputText={setInputText}
            recentSearchWords={recentSearchWords}
            search={search}
          />
        </div>
      </div>
    </section>
  );
}

export default SearchSection;
