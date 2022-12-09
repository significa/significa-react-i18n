import React, { Fragment } from 'react'

import {
  getMatches,
  getMessage,
  getParts,
  parseMatchesForKey,
  useMessages,
} from './utils'

type Props = {
  id: string
  values?: Record<string, string | React.ReactNode>
}

export const Translation = ({ id, values = {} }: Props): JSX.Element => {
  const messages = useMessages()

  const message = getMessage(messages, id)
  const matches = getMatches(message)
  const parts = getParts(message)

  if (!matches) {
    return <Fragment>{message}</Fragment>
  }

  const matchedValues = parseMatchesForKey<
    Record<string, string | React.ReactNode>
  >(matches, id, values)
  const elements = parts.map((part, i) => {
    return <Fragment key={part + i}>{matchedValues[part] ?? part}</Fragment>
  })

  return <Fragment>{elements}</Fragment>
}
