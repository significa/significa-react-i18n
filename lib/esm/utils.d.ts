export declare const useMessages: () => Record<string, string>;
export declare const getMessage: (messages: Record<string, string>, id: string) => string;
export declare const getMatches: (message: string) => RegExpMatchArray | null;
export declare const parseMatchesForKey: <T extends Record<string, unknown> = Record<string, string>>(matches: RegExpMatchArray, key: string, values: T) => T;
export declare const getParts: (message: string) => string[];
