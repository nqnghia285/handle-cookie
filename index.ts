import { CookieParseOptions, CookieSerializeOptions, parse, serialize } from "cookie";

/**
 * @method cookieParse: Parse string to cookie objiect
 * @param str
 * @param option
 * @returns any
 */
export function cookieParse(str: string | undefined, option?: CookieParseOptions | undefined): any {
    if (str !== undefined) {
        return parse(str, option);
    } else {
        return undefined;
    }
}

/**
 * @method cookieSerialize: Convert object to cookie string
 * @param name
 * @param value
 * @param option
 * @returns any
 */
export function cookieSerialize(name: string | undefined, value: string | undefined, option?: CookieSerializeOptions | undefined): any {
    if (name !== undefined && value !== undefined) {
        return serialize(name, value, option);
    } else {
        return undefined;
    }
}
