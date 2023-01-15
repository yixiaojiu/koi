import { createContext } from 'react'
import { AddMessageFunc, ClearMessagesFunc, RemoveMessageFunc, MessageItem } from '@/components/message/Message'

interface MessageContext {
  loadingMessage?: string
  addMessage?: AddMessageFunc
  removeMessage?: RemoveMessageFunc
  clearMessages?: ClearMessagesFunc
  message?: MessageItem[]
}

export const MessageContext = createContext<MessageContext>({})
