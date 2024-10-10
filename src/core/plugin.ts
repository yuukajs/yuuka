export function definePlugin<
  T extends { config: { [key: string]: any }; apply: (...args: any[]) => void },
  S extends any,
>(plugin: { apply: (ctx: S, config: T["config"]) => void }) {
  return plugin;
}
export class Plugins {
  plugins: { apply: (...args: any[]) => void }[];
  ctx: any;
  constructor(ctx: any) {
    this.ctx = ctx
  }
  register<T extends { [key: string]: any }>(config: T, plugin: {
    config: T;
    apply: (ctx: any, config: T) => void;
  }): boolean {
    plugin.apply(this.ctx, config)
    return !!this.plugins.push(plugin);
  }
}
