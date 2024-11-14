import { Awaitable } from '@/types'

export abstract class Runtime {
  config: any
  uses: any
  constructor(config:any, callback:()=>void) {
    this.config = config
    callback()
  }

  abstract run(task:(...args:any[])=>any): Awaitable<boolean|undefined>
  abstract watch(watcher:(...args:any[])=>any): Awaitable<boolean|undefined>
  abstract use(lib:any): Awaitable<boolean|undefined>
}
