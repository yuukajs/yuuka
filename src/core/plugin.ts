import { Context, Application } from '@/types'

interface Plugin<T> extends Application<T>{
  config: T
}
export function definePlugin(plugin: Plugin) {
  return plugin
}

export class Plugins {
  plugins: Plugin<any>[]
  constructor() {}
  register<T>(plugin: Plugin<T>): boolean {
    plugin.apply(this.ctx, config)
    return !!this.plugins.push(plugin)
  }
}
