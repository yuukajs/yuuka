export class Flow {
  solute: any;
  solvent: any;
  defines: Domer<any>[] = [];
  constructor() {
    this.solute = { value: null };
    this.solvent = new Proxy(this.solute, {
      set: (old, prop, value) => {
        this.flowout(old, value);
        old.prop = value;
        return !0;
      },
    });
  }

  flow(liquid) {
    this.solvent.value = liquid;
  }

  dom<T>(lambda: (e: T) => boolean, body: (e: T) => any) {
    this.defines.push({ lambda, body });
  }

  flowout(old: any, value: any) {
    const effects = this.defines.filter((e) => e.lambda(value));
    effects.forEach(({ body }) => {
      body(value);
    });
  }
}
interface Domer<T> {
  lambda: (x: T) => boolean;
  body: (x: T) => any;
}
