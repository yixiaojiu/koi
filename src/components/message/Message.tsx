import { createRef, ReactElement, useRef, useState, useCallback } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import type { NodeRef } from '@/shared/types/utils'

interface Props {
  className?: string
  message: MessageItem[]
}

export type MessageElement = ReactElement | string | number

export interface MessageItem {
  id: number
  nodeRef: NodeRef<HTMLDivElement>
  element: MessageElement
  permanent?: boolean
  timer?: NodeJS.Timeout
}

export const MessageProvider = (props: Props) => {
  return (
    <TransitionGroup className={`${props.className ? props.className : ''}`}>
      {props.message.map(({ id, nodeRef, element }) => (
        <CSSTransition key={id} nodeRef={nodeRef} timeout={300} classNames="fade-right">
          <div ref={nodeRef}>{element}</div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export const useMessage = (timeout = 2000) => {
  const id = useRef(1)
  const [message, setMessage] = useState<MessageItem[]>([])

  const removeMessage = useCallback((id: number) => {
    setMessage((message) =>
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

  const addMessage = useCallback(
    (element: MessageElement, permanent?: boolean) => {
      const tempId = id.current
      let timer: NodeJS.Timeout
      if (!permanent) {
        timer = setTimeout(() => {
          removeMessage(tempId)
        }, timeout)
      }
      setMessage((message) => {
        id.current++
        return [...message, { id: tempId, nodeRef: createRef(), permanent, timer, element: <p>{element}</p> }]
      })
    },
    [timeout]
  )

  const clearMessages = useCallback(() => {
    setMessage(() => [])
  }, [])

  return {
    message,
    addMessage,
    removeMessage,
    clearMessages,
  }
}
