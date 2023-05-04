import { EXPIRE_TIME, HEADER_FETCH_DATE } from '@/constants/cache';

export const getIsCacheExpired = (cacheResponse: Response) => {
  const cachedDate = cacheResponse.headers.get(HEADER_FETCH_DATE);

  if (!cachedDate) return;

  const fetchDate = new Date(cachedDate).getTime();
  const today = new Date().getTime();

  return today - fetchDate > EXPIRE_TIME;
};

export const getCachedResponse = async (url: string, queryStr: string) => {
  const cacheStorage = await caches.open(url);
  const cachedResponse = await cacheStorage.match(queryStr);
  if (cachedResponse) {
    if (!getIsCacheExpired(cachedResponse)) return cachedResponse;
    await cacheStorage.delete(queryStr);
    return null;
  }
  return null;
};

export const setCacheStorage = async (
  url: string,
  queryStr: string,
  data: SearchWordType[],
) => {
  const cacheStorage = await caches.open(url);
  const response = new Response(JSON.stringify(data));

  const cloneResponse = response.clone();
  const newBody = await cloneResponse.blob();
  const newHeaders = new Headers(cloneResponse.headers);
  newHeaders.append(HEADER_FETCH_DATE, new Date().toISOString());

  const newResponse = new Response(newBody, {
    status: cloneResponse.status,
    statusText: cloneResponse.statusText,
    headers: newHeaders,
  });

  cacheStorage.put(queryStr, newResponse);
};
