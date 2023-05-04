import axios, { AxiosInstance } from 'axios';
import { BASE_URL } from '@/constants/config';

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
