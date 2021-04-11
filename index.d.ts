/// <reference path="index.ts" />
/// <reference types="cookie" />

import { CookieParseOptions, CookieSerializeOptions } from "cookie";

/**
 * @method cookieParse: Parse string to cookie objiect
 * @param str
 * @param option
 * @returns any
 */
export function cookieParse(str: string | undefined, option?: CookieParseOptions | undefined): { [key: string]: string } | undefined;

/**
 * @method cookieSerialize: Convert object to cookie string
 * @param name
 * @param value
 * @param option
 * @returns any
 */
export function cookieSerialize(name: string | undefined, value: string | undefined, option?: CookieSerializeOptions | undefined): string | undefined;
