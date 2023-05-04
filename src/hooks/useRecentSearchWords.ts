import { useEffect, useState } from 'react';
import { RECENT_SEARCH_WORDS_KEY } from '@/constants/session';

const useRecentSearchWords = () => {
  const [recentSearchWords, setRecentSearchWords] = useState<string[]>([]);

  const updateRecentSearchWords = (inputText: string) => {
    setRecentSearchWords((prevWords) => {
      if (prevWords[0] === inputText) return prevWords;

      if (prevWords.includes(inputText)) {
        prevWords.splice(prevWords.indexOf(inputText), 1);
      }

      const newWords = [inputText, ...prevWords];

      sessionStorage.setItem(RECENT_SEARCH_WORDS_KEY, JSON.stringify(newWords));
      return newWords;
    });
  };

  useEffect(() => {
    const savedRecent = sessionStorage.getItem(RECENT_SEARCH_WORDS_KEY);
    if (savedRecent) setRecentSearchWords(JSON.parse(savedRecent));
  }, []);

  return { recentSearchWords, updateRecentSearchWords };
};

export default useRecentSearchWords;
