export const SERVER_URL = process.env.SERVER_DEV_URL;
// export const API_URL = `${SERVER_URL}/api`;

export const getAuthUrl = (string: string) => `/Auth${string}`;
export const getUsersUrl = (string: string) => `/Users${string}`;
export const getBookmarkUrl = (string: string) => `/Bookmark${string}`;
export const getAdminUrl = (string: string) => `/Admin${string}`;
