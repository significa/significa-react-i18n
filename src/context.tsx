import React, { createContext, ReactNode } from 'react'

export const I18nContext = createContext<{
  readonly messages: Record<string, string>
}>({
  messages: {},
})

export const I18nProvider = ({
  messages = {},
  children,
}: {
  messages: Record<string, string>
  children: ReactNode
}) => {
  return (
    <I18nContext.Provider value={{ messages }}>{children}</I18nContext.Provider>
  )
}
