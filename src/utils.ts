import { useContext } from 'react'

import { I18nContext } from './context'

const PATTERN = /\{\{(.*?)\}\}/gim

export const useMessages = (): Record<string, string> => {
  const { messages } = useContext(I18nContext)

  if (process.env.NODE_ENV !== 'production' && !messages) {
    throw new Error(
      `No messages found in context. Make sure you're wrapping your app with the I18nProvider with a 'messages' prop.`
    )
  }

  return messages
}

export const getMessage = (
  messages: Record<string, string>,
  id: string
): string => {
  if (!messages[id]) {
    if (process.env.NODE_ENV !== 'production') {
      throw new Error(`Translation '${id}' not found.`)
    } else {
      messages[id] = id
    }
  }

  return messages[id]
}

export const getMatches = (message: string): RegExpMatchArray | null => {
  return message.match(PATTERN)
}

export const parseMatchesForKey = <
  T extends Record<string, unknown> = Record<string, string>
>(
  matches: RegExpMatchArray,
  key: string,
  values: T
): T => {
  for (const match of matches) {
    const matchName = match.replace(/\{\{|\}\}/gim, '')
    if (!values[matchName]) {
      if (process.env.NODE_ENV !== 'production') {
        throw new Error(
          `Missing value: \`${matchName}\` for translation key: \`${key}\``
        )
      } else {
        return { ...values, [matchName]: matchName }
      }
    }
  }

  return values
}

export const getParts = (message: string): string[] => {
  return message.split(PATTERN)
}
