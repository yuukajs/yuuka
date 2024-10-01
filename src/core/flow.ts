export class Flow {
  solute: any
  solvent: any
  defines: {lambda: (x: any) => boolean; body: (ctx: any) => any}[] = []
  constructor() {
    this.solute = { value: null }
    this.solvent = new Proxy(this.solute, {
      set: (old, prop, value) => {
        this.flowout(old, value)
        old.prop = value
        return !0
      },
    })
  }

  flow(liquid) {
    this.solvent.value = liquid
  }

  dom(lambda, body) {
    this.defines.push({ lambda, body })
  }

  flowout(old: any, value: any) {
    const effects = this.defines.filter(e => e.lambda(value))
    effects.forEach(({ body }) => {
      body(value)
    })
  }
}
