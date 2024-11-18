export interface Application<T>{
  apply(ctx: Context, config: T): void
}
export interface Context{}

export type Awaitable<T> = T|Promise<T>

export namespace DefaultDefine{
  export type Message = any
  export type Sender = any
  export type Event = any
}

export interface EventPool<C, H>{
  curr?:C
  cache?:H
}
