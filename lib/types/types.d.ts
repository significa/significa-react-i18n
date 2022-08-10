export declare type TranslateKeys = Record<string, any>;
export declare type Values<K extends keyof TranslateKeys> = TranslateKeys[K] extends undefined | null | never ? [undefined?] : [TranslateKeys[K]];
