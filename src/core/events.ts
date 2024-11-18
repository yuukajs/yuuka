import {EventEmitter} from "node:events"
import {DefaultDefine} from "@/types"

export class Events extends EventEmitter{
  constructor(internal:[(string|symbol), ((...args:any[])=>any)][], opts?:any){
    super(opts)
    internal.forEach(e=>this.on(...e))
    const eventPool: {
	curr?: DefaultDefine.Event,
        cache: DefaultDefine.Event[]
    }={
	cache:[]
    }
    this.#eventPool=new Proxy(eventPool, {
	set: <T extends keyof typeof eventPool>(target:typeof eventPool, p:T, value: T extends "curr"?any:any[])=>{
	  const oldEvent=target.curr
          const result = !!(target[p]=value);
	  if(p==="curr") {
	    oldEvent&&target.cache.push(oldEvent);
	    this.emit(value.type)
	  }
	  if(target.cache.length>6){
	    target.cache.splice(0, 1)
	  }
          return result;
	}
    })
  }
  #eventPool:{
    curr?:any,
    cache:any[]
  }
  push(event:any){
    this.#eventPool.curr=event
  }
  get lastestEvent(){
    return this.#eventPool[5]
  }
}
