import axios from 'axios';
import { useAuthStore } from '@/stores/auth';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE,
  headers: { 'Content-Type': 'application/json' },
});

// Tự gắn Bearer token cho mọi request
http.interceptors.request.use((config) => {
  const auth = useAuthStore();          // lấy store singleton
  if (auth.token) config.headers.Authorization = `Bearer ${auth.token}`;
  return config;
});
