import { MAX_DISPLAYED, SUGGESTED_SEARCH_WORDS } from '@/constants/searchWord';
import SearchWord from './SearchWord';

type SearchWordBoxProps = {
  isLoading: boolean;
  inputText: string;
  debouncedInputText: string;
  recentSearchWords: string[];
  autocompleteWords: SearchWordType[];
  focusIndex: number;
  onSearch: (input: string) => void;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  setFocusIndex: React.Dispatch<React.SetStateAction<number>>;
};

function SearchWordBox({
  isLoading,
  inputText,
  debouncedInputText,
  recentSearchWords,
  autocompleteWords,
  focusIndex,
  onSearch,
  setInputText,
  setFocusIndex,
}: SearchWordBoxProps) {
  const handleClickWord = (word: string) => {
    setInputText(word);
    onSearch(word);
  };

  return (
    <div className="absolute mt-1.5 py-6 w-full max-w-[486px] bg-white rounded-[1.2rem] shadow-lg left-[50%] translate-x-[-50%]">
      {inputText ? (
        // 사용자가 검색어를 입력중일 때
        <>
          <SearchWord
            inputText={inputText}
            word={inputText}
            onClick={handleClickWord}
            isFocused={false}
            setFocusIndex={setFocusIndex}
          />

          <div className="px-6 py-1 text-[0.85rem] text-gray-400 leading-none">
            추천 검색어
          </div>
          {isLoading ? (
            <div className="px-6 pt-2 pb-3 text-sm text-gray-300">
              검색 중...
            </div>
          ) : autocompleteWords.length ? (
            // 사용자가 검색중이고 추천 검색어가 있을 때
            <>
              {autocompleteWords.map(({ id, name }, index) => (
                <SearchWord
                  key={id}
                  inputText={debouncedInputText}
                  word={name}
                  onClick={handleClickWord}
                  isFocused={focusIndex === index}
                  setFocusIndex={setFocusIndex}
                />
              ))}
            </>
          ) : (
            // 추천 검색어가 없을 때
            <div className="px-6 py-2 text-gray-300">검색어 없음</div>
          )}
        </>
      ) : (
        // 검색어 입력중이 아닐 때
        <>
          <div className="pb-6">
            <div className="px-6 text-[0.85rem] text-gray-400 leading-none">
              최근 검색어
            </div>
            {recentSearchWords.length ? (
              // 최근 검색어가 있을 때
              <div className="flex flex-col pt-2">
                {recentSearchWords
                  .slice(0, MAX_DISPLAYED)
                  .map((word, index) => (
                    <SearchWord
                      key={word + index}
                      word={word}
                      onClick={handleClickWord}
                      isFocused={focusIndex === index}
                      setFocusIndex={setFocusIndex}
                    />
                  ))}
              </div>
            ) : (
              // 최근 검색어가 없을 때
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
                  onClick={() => handleClickWord(word)}
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
