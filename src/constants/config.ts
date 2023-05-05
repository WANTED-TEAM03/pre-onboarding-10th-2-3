const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
export const BASE_URL = `${PROXY}/api/v1`;
export const API_URLS = { search: '/search-conditions/' };

export const DEFAULT_INDEX = -1;

export const DEFAULT_ERROR_MESSAGE = '알 수 없는 오류가 발생했습니다.';
