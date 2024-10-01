<p align="center">
  <a href="https://www.github.com/lisk809/yuuka">
    <img src="https://yuuka.js.org/logo.png" width="200" height="200" alt="yuuka">
  </a>
</p>

<div align="center">

# [Yuuka](https://yuuka.js.org/)

> When a soul lodges, flowers bloom.


#### Cross-platform chat robot framework.


  [![NPM Downloads](https://img.shields.io/npm/dw/yuuka)](https://npmjs.org/package/@yuukajs/yuuka)
  [![GitHub License](https://img.shields.io/github/license/yuukajs/yuuka)](https://github.com/yuukajs/yuuka/blob/main/license)
  [![Node Current](https://img.shields.io/node/v/yuuka)](https://github.com/yuukajs/yuuka/blob/main/package.json)
  [![npm bundle size](https://img.shields.io/bundlephobia/min/yuuka)](https://yuuka.js.org)
  [![Release](https://img.shields.io/github/v/release/yuukajs/yuuka?color=blueviolet&include_prereleases)](https://github.com/yuukajs/yuuka/releases)

</div>

## 特性

### 高性能

开发者以高性能为设计原则，力为用户打造高性能，轻量化框架

### 优秀生态

`Yuuka`有许多优秀社区开发者，为`Yuuka`生态建设提供充足动力，优秀活力，持续能力


## 快速开始

```bash
npm install @yuukajs/yuuka -g
```

`sanae`用来实现跨平台的设计模式是适配器，因此，仅仅yuuka本体是不能直接使用的，你还需要对于不同平台的适配器，比如:

```bash
npm install @yuukajs/adapter-console
```

还需在yuuka应用目录下的`yuuka.yaml`中写上
```yaml
adapter:
  @yuukajs/adapter-console: {}
```

然后
```bash
npx yuuka start
```

如果没有报错信息，恭喜🎉，成功开始`Yuuka`的第一个项目
