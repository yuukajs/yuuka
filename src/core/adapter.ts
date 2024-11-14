import { Application } from '@/types'
export interface Adapter extends Application{
  user?: User
  self?: Self
  group?: Group
}
export interface User{
  like(): Awaitable<any|undefined>
}

export interface Self{
  sendMsg(sender, msg): Awaitable<boolean|undefined>
  events: Proxy
  recallMsg(msgId): Awaitable<boolean|undefined>
}

export interface Group{

}

export function defineAdapter(adapter: Adapter) {
  return adapter
}
