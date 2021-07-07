import {
  getCookie,
  setCookie,
  removeCookie
} from './cookies';

const TOKEN_KEY = 'Auth-Token';

export function getAuth() {
  return getCookie(TOKEN_KEY);
}

export function setAuth(token) {
  return setCookie(TOKEN_KEY, token);
}

export function removeAuth() {
  return removeCookie(TOKEN_KEY);
}