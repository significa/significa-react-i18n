import React, { ReactNode } from 'react';
export declare const I18nContext: React.Context<{
    readonly messages: Record<string, string>;
}>;
export declare const I18nProvider: ({ messages, children, }: {
    messages: Record<string, string>;
    children: ReactNode;
}) => JSX.Element;
