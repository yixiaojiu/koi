import { MessageProvider, useMessage } from '@/components/message/Message'

let id = 1
export default function User() {
  const { message, addMessage, clearMessages } = useMessage(6000)
  return (
    <div className="h-full text-amber center flex-col">
      <button onClick={() => addMessage(id++)}>添加</button>
      <button onClick={() => clearMessages()}>清空</button>
      <MessageProvider className="min-w-50" message={message} />
    </div>
  )
}
