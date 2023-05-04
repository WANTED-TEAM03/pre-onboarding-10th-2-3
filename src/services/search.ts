import { AxiosError, AxiosRequestConfig } from 'axios';
import { API_URLS } from '@/constants/config';
import { getCachedResponse, setCacheStorage } from '@/utils/cacheStorage';
import apiClient from './apiClient';

type ErrorResponse = {
  message: string;
};

export const searchAPI = async (name: string) => {
  if (name === '') return [];

  const config: AxiosRequestConfig = {
    params: {
      name,
    },
  };
  const queryStr = new URLSearchParams(config.params).toString();
  const responsedCache = await getCachedResponse(API_URLS.search, queryStr);

  if (responsedCache) return await responsedCache.json();

  try {
    const { data } = await apiClient.get<SearchWordType[]>(
      API_URLS.search,
      config,
    );
    console.info('calling api');

    setCacheStorage(API_URLS.search, queryStr, data);
    return data;
  } catch (e) {
    const err = e as AxiosError<ErrorResponse>;
    alert(err.response?.data.message || '알 수 없는 오류가 발생했습니다.');
    return [];
  }
};
