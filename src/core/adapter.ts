import { Application, Awaitable, EventPool, DefaultDefine } from '@/types'
export interface Adapter<T> extends Application<T>{
  user?: User
  self?: Self
  group?: Group
}
export interface User{
  like(): Awaitable<any|undefined>
}

export interface Self{
  sendMsg(sender:DefaultDefine.Sender, msg:DefaultDefine.Message): Awaitable<boolean|undefined>
  eventPool: EventPool<DefaultDefine.Event, DefaultDefine.Event[]>
  recallMsg(msgId:DefaultDefine.Message["msgId"]): Awaitable<boolean|undefined>
}

export interface Group{

}

export function defineAdapter<T>(adapter: Adapter<T>) {
  return adapter
}
