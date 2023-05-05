import SearchIcon from '@/components/SearchSection/SearchIcon';

type SearchWordProps = {
  inputText?: string;
  word: string;
  isFocused: boolean;
  onClick: (word: string) => void;
};

function SearchWord({ inputText, word, isFocused, onClick }: SearchWordProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(word)}
      className={`flex items-center gap-x-3 px-6 py-2 w-full text-gray-300 hover:bg-gray-50${
        isFocused ? ' bg-gray-50' : ''
      }`}
    >
      <SearchIcon size="16" />
      <span className="text-black">
        {inputText && (
          <span className="font-bold">{word.slice(0, inputText.length)}</span>
        )}
        {word.slice(inputText?.length)}
      </span>
    </button>
  );
}

export default SearchWord;
