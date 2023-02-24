import { createRef, ReactElement, useRef, useState, useCallback } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import type { NodeRef, ClassNameProps } from '@/shared/types/utils'

interface Props {
  className?: string
  messages: MessageItem[]
}

export type MessageElement = ReactElement | string | number
export type AddMessageFunc = (element: MessageElement, customId?: number | string, permanent?: boolean) => void
export type RemoveMessageFunc = (id: number | string) => void
export type ClearMessagesFunc = () => void

export interface MessageItem {
  id: number | string
  nodeRef: NodeRef<HTMLDivElement>
  element: MessageElement
  permanent?: boolean
  timer?: NodeJS.Timeout
}

interface MessageContentProps extends ClassNameProps {
  children?: MessageElement
}

export const MessageContent = (props: MessageContentProps) => (
  <div
    className={`text-white my-2 text-sm p-2 bg-black/[0.3] rounded-1 text-center  ${
      props.className ? props.className : ''
    }`}
  >
    {props.children}
  </div>
)

export const MessageProvider = (props: Props) => {
  return (
    <TransitionGroup className={`${props.className ? props.className : ''}`}>
      {props.messages.map(({ id, nodeRef, element }) => (
        <CSSTransition key={id} nodeRef={nodeRef} timeout={300} classNames="fade-right">
          <div ref={nodeRef}>{element}</div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export const useMessage = (timeout = 2000) => {
  const id = useRef(1)
  const [messages, setMessages] = useState<MessageItem[]>([])

  const removeMessage = useCallback<RemoveMessageFunc>((id) => {
    setMessages((message) =>
      message.filter((item) => {
        if (item.id !== id) {
          return true
        } else {
          clearTimeout(item.timer)
          return false
        }
      })
    )
  }, [])

  const addMessage = useCallback<AddMessageFunc>(
    (element, customId, permanent) => {
      const tempId = id.current
      let timer: NodeJS.Timeout
      if (!permanent) {
        timer = setTimeout(() => {
          removeMessage(tempId)
        }, timeout)
      }
      setMessages((message) => {
        id.current++
        return [
          ...message,
          {
            id: customId || tempId,
            nodeRef: createRef(),
            permanent,
            timer,
            element: typeof element === 'string' ? <MessageContent>{element}</MessageContent> : element,
          },
        ]
      })
    },
    [timeout, removeMessage]
  )

  const clearMessages = useCallback<ClearMessagesFunc>(() => {
    setMessages(() => [])
  }, [])

  return {
    messages,
    addMessage,
    removeMessage,
    clearMessages,
  }
}
