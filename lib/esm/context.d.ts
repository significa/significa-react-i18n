import { ReactNode } from 'react';
export declare const I18nContext: import("react").Context<{
    readonly messages: Record<string, string>;
}>;
export declare const I18nProvider: ({ messages, children, }: {
    messages: Record<string, string>;
    children: ReactNode;
}) => JSX.Element;
