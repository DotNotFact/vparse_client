export const SERVER_URL = process.env.SERVER_DEV_URL;
// export const API_URL = `${SERVER_URL}/api`;

export const getAuthUrl = (string: string) => `/Auth${string}`;
export const getUserUrl = (string: string) => `/User${string}`;
export const getFavoriteUrl = (string: string) => `/Bookmark${string}`;
export const getAdminUrl = (string: string) => `/Admin${string}`;
