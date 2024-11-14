import { Context, Application } from '@/types'

interface Plugin<T> extends Application<T>{
  config: T
}
export function definePlugin<T>(plugin: Plugin<T>) {
  return plugin
}
export type ssa<T> = T extends number ? number : never;
export class Plugins {
  plugins: Plugin<any>[]
  ctx: Context;
  constructor(context: Context) {
    this.ctx=context;
  }
  register<T>(plugin: Plugin<T>, config:any): boolean {
    plugin.apply(this.ctx, config)
    return !!this.plugins.push(plugin)
  }
}
