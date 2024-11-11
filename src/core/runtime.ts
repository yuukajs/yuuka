import { Awaitable } from '@/types'

export abstract class Runtime {
  config: any
  uses: any
  constructor(config, callback) {
    this.config = config
    callback()
  }

  abstract run(task): Awaitable<boolean|undefined>
  abstract watch(watcher): Awaitable<boolean|undefined>
  abstract use(lib): Awaitable<boolean|undefined>
}
