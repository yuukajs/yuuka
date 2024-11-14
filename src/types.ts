export interface Application<T>{
  apply(ctx: Context, config: T): void
}
export interface Context{}

export type Awaitable<T> = T|Promise<T>
