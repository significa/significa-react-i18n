declare type TranslateFunction = (id: string, values?: Record<string, string>) => string;
export declare const useTranslation: () => {
    t: TranslateFunction;
};
export {};
