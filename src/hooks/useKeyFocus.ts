import { useCallback, useState } from 'react';
import { DEFAULT_INDEX } from '@/constants/config';

const KEY_NAME = {
  arrowDown: 'ArrowDown',
  arrowUp: 'ArrowUp',
  enter: 'Enter',
};

const useKeyFocus = (
  searchWords: SearchWordType[],
  isOnFocus: boolean,
  setIsOnFocus: React.Dispatch<React.SetStateAction<boolean>>,
  setInputText: React.Dispatch<React.SetStateAction<string>>,
) => {
  const [focusIndex, setFocusIndex] = useState<number>(DEFAULT_INDEX);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!isOnFocus) return;
      if (event.isComposing) return;

      if (event.key === KEY_NAME.arrowDown) {
        event.preventDefault();

        setFocusIndex((currentIndex) =>
          Math.min(currentIndex + 1, searchWords.length - 1),
        );
        return;
      }

      if (event.key === KEY_NAME.arrowUp) {
        event.preventDefault();

        setFocusIndex((currentIndex) => Math.max(-1, currentIndex - 1));
        return;
      }

      if (event.key === KEY_NAME.enter) {
        setInputText(searchWords[focusIndex].name);
        setIsOnFocus(false);
      }
    },
    [searchWords, focusIndex, isOnFocus, setInputText, setIsOnFocus],
  );

  return { focusIndex, handleKeyDown, setFocusIndex };
};

export default useKeyFocus;
