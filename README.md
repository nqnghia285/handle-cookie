# Handle Cookie [![Build Status](https://github.com/Links2004/arduinoWebSockets/workflows/CI/badge.svg?branch=master)](https://github.com/nqnghia285/handle-cookie.git)

### Functions:

```typescript
/**
 * @method cookieParse: Parse string to cookie objiect
 * @param str string | undefined
 * @param option CookieParseOptions | undefined
 * @returns { [key: string]: string } | undefined
 */
function cookieParse(str: string | undefined, option?: CookieParseOptions | undefined): { [key: string]: string } | undefined;
```

```typescript
/**
 * @method cookieSerialize: Convert object to cookie string
 * @param name string
 * @param value string | undefined
 * @param option CookieSerializeOptions | undefined
 * @returns string | undefined
 */
function cookieSerialize(name: string | undefined, value: string | undefined, option?: CookieSerializeOptions | undefined): string | undefined;
```
