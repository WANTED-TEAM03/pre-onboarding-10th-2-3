type DeleteButtonProps = {
  isOnFocus: boolean;
  deleteText: () => void;
};

function DeleteButton({ isOnFocus, deleteText }: DeleteButtonProps) {
  return (
    <button
      type="button"
      onClick={deleteText}
      className={`flex justify-center items-center w-5 h-5 rounded-full bg-gray-300 ${
        isOnFocus ? 'pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <svg
        width="10"
        height="10"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        color="white"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 6.414l3.293 3.293 1.414-1.414L6.414 5l3.293-3.293L8.293.293 5 3.586 1.707.293.293 1.707 3.586 5 .293 8.293l1.414 1.414L5 6.414z"
        />
      </svg>
    </button>
  );
}

export default DeleteButton;
