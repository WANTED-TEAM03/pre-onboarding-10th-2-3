import SearchIcon from '../SearchIcon';
import DeleteButton from './DeleteButton';

type SearchBarProps = {
  inputText: string;
  isOnFocus: boolean;
  onSearch: (input: string) => void;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
};

function SearchBar({
  inputText,
  isOnFocus,
  onSearch,
  setInputText,
}: SearchBarProps) {
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const handleClickDeleteButton = () => setInputText('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch(inputText);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex items-center w-full bg-white rounded-full border-2 ${
        isOnFocus ? 'border-blue' : 'border-white'
      }`}
    >
      <label className="relative flex items-center flex-1 py-5 pl-6 pr-2.5 text-gray-300">
        <div
          className={`flex items-center${
            isOnFocus || inputText ? ' opacity-0' : ''
          }`}
        >
          <SearchIcon size="16" />
          <div className="ml-3 text-lg">질환명을 입력해 주세요.</div>
        </div>

        <div className="absolute flex items-center pr-9 w-full pointer-events-none">
          <input
            type="text"
            className="pl-px pr-1.5 w-full bg-transparent text-lg text-black pointer-events-auto focus:outline-none"
            onInput={handleInput}
            value={inputText}
            spellCheck={false}
          />
          <DeleteButton
            isOnFocus={isOnFocus}
            onClick={handleClickDeleteButton}
          />
        </div>
      </label>

      <button
        type="submit"
        name="search"
        className="flex justify-center items-center mr-2 w-12 h-12 bg-blue rounded-full text-white hover:bg-darkblue"
      >
        <SearchIcon size="21" />
      </button>
    </form>
  );
}

export default SearchBar;
