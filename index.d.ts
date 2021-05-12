import { CookieParseOptions, CookieSerializeOptions } from "cookie";

/**
 * @method cookieParse: Parse string to cookie objiect
 * @param str string | undefined
 * @param option CookieParseOptions | undefined
 * @returns { [key: string]: string } | undefined
 */
export function cookieParse(str: string | undefined, option?: CookieParseOptions | undefined): { [key: string]: string } | undefined;

/**
 * @method cookieSerialize: Convert object to cookie string
 * @param name string
 * @param value string | undefined
 * @param option CookieSerializeOptions | undefined
 * @returns string | undefined
 */
export function cookieSerialize(name: string | undefined, value: string | undefined, option?: CookieSerializeOptions | undefined): string | undefined;
