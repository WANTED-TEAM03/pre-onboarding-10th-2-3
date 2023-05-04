import SearchIcon from '@/components/SearchSection/SearchIcon';

type SearchWordProps = {
  inputText?: string;
  word: string;
  clickWord: (word: string) => void;
  isFocused: boolean;
};

function SearchWord({
  inputText,
  word,
  clickWord,
  isFocused,
}: SearchWordProps) {
  return (
    <button
      type="button"
      onClick={() => clickWord(word)}
      className={`flex items-center gap-x-3 px-6 py-2 w-full text-gray-300 hover:bg-gray-50${
        isFocused ? ' bg-gray-50' : ''
      }`}
    >
      <SearchIcon size="16" />
      <span className="text-black">
        {inputText ? <span className="font-bold">{inputText}</span> : null}
        {word.slice(inputText?.length)}
      </span>
    </button>
  );
}

export default SearchWord;
