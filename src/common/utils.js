import { ERROR_MESSAGES } from '../constants/index.js';

export const $ = selector => document.querySelector(selector);

/**
 * alert에 출력할 에러 메세지를 설정합니다.
 *
 * @param {String} type
 * @returns {undefined} : Falsy
 */
export const setErrorMessage = type => alert(ERROR_MESSAGES[type]);

export const isNull = value => value === null || value === undefined;