import { TranslateKeys, Values } from './types'
import {
  parseMatchesForKey,
  getMatches,
  getMessage,
  getParts,
  useMessages,
} from './utils'

export const useTranslation = () => {
  const messages = useMessages()

  function t<K extends keyof TranslateKeys>(
    key: K,
    ...args: Values<K>
  ): string {
    const values = args[0]

    const message = getMessage(messages, key)
    const matches = getMatches(message)
    const parts = getParts(message)

    if (!matches || !values) {
      return message
    }

    const matchedValues = parseMatchesForKey(matches, key, values)
    const elements = parts.map((part) => {
      return matchedValues[part] ?? part
    })

    return Array.isArray(elements) ? elements.join('') : elements
  }

  return { t }
}
