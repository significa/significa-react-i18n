import {
  parseMatchesForKey,
  getMatches,
  getMessage,
  getParts,
  useMessages,
} from './utils'

type TranslateFunction = (id: string, values?: Record<string, string>) => string

export const useTranslation = (): {
  t: TranslateFunction
} => {
  const messages = useMessages()

  const t: TranslateFunction = (id, values = {}) => {
    const message = getMessage(messages, id)
    const matches = getMatches(message)
    const parts = getParts(message)

    if (!matches) {
      return message
    }

    const matchedValues = parseMatchesForKey(matches, id, values)
    const elements = parts.map((part) => {
      return matchedValues[part] || part
    })

    return Array.isArray(elements) ? elements.join('') : elements
  }

  return { t }
}
