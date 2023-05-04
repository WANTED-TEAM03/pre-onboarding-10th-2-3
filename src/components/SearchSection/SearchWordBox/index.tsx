import { useEffect, useState } from 'react';
import { MAX_DISPLAYED, SUGGESTED_SEARCH_WORDS } from '@/constants/searchWord';
import { searchAPI } from '@/services/search';
import SearchWord from './SearchWord';

type SearchWordBoxProps = {
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  recentSearchWords: string[];
  search: (input: string) => void;
};

function SearchWordBox({
  inputText,
  setInputText,
  recentSearchWords,
  search,
}: SearchWordBoxProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [autocompleteWords, setAutocompleteWords] = useState<
    { id: number; name: string }[]
  >([]);

  const clickWord = (word: string) => {
    setInputText(word);
    search(word);
  };

  useEffect(() => {
    const fetchAutocompleteWords = async () => {
      const words = await searchAPI(inputText);
      setAutocompleteWords(words.slice(0, MAX_DISPLAYED));
    };

    fetchAutocompleteWords();
  }, [inputText]);

  return (
    <div className="absolute mt-1.5 py-6 w-full max-w-[486px] bg-white rounded-[1.2rem] shadow-lg left-[50%] translate-x-[-50%]">
      {inputText ? (
        <>
          <SearchWord
            inputText={inputText}
            word={inputText}
            clickWord={clickWord}
          />

          <div className="px-6 py-1 text-[0.85rem] text-gray-400 leading-none">
            추천 검색어
          </div>
          {isLoading ? (
            <div className="px-6 pt-2 pb-3 text-sm text-gray-300">
              검색 중...
            </div>
          ) : autocompleteWords.length ? (
            <>
              {autocompleteWords.map(({ id, name }) => (
                <SearchWord
                  key={id}
                  inputText={inputText}
                  word={name}
                  clickWord={clickWord}
                />
              ))}
            </>
          ) : (
            <div className="px-6 py-2 text-gray-300">검색어 없음</div>
          )}
        </>
      ) : (
        <>
          <div className="pb-6">
            <div className="px-6 text-[0.85rem] text-gray-400 leading-none">
              최근 검색어
            </div>

            {recentSearchWords.length ? (
              <div className="flex flex-col pt-2">
                {recentSearchWords
                  .slice(0, MAX_DISPLAYED)
                  .map((word, index) => (
                    <SearchWord
                      key={word + index}
                      word={word}
                      clickWord={clickWord}
                    />
                  ))}
              </div>
            ) : (
              <div className="px-6  pt-5 text-gray-300">
                최근 검색어가 없습니다
              </div>
            )}
          </div>

          <div className="px-6 pt-6 border-t border-t-gray-100">
            <div className="text-[0.85rem] text-gray-400 leading-none">
              추천 검색어로 검색해보세요
            </div>
            <div className="mt-4 flex items-center gap-x-2">
              {SUGGESTED_SEARCH_WORDS.map(({ id, word }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => clickWord(word)}
                  className="px-4 py-2.5 bg-lightblue text-blue rounded-full text-[0.9rem] hover:bg-skyblue"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SearchWordBox;
