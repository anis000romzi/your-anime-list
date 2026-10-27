export const ANIME_API_BASE_URL = process.env.NODE_ENV === 'development'
  ? '/api/catalog'
  : 'https://api.tenrai.org/v1';
