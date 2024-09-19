<p align="center">
  <a href="https://www.github.com/lisk809/sanae">
    <img src="images/logo.png" width="200" height="200" alt="momizi">
  </a>
</p>

<div align="center">

# Momizi

<p align="center">✨跨平台聊天机器人框架✨</p>


</div>

<p align="center">
  <a href="https://raw.githubusercontent.com/lisk809/sanae/main/LICENSE">
    <img src="https://img.shields.io/github/license/lisk809/sanae" alt="license">
  </a>
  <a href="https://github.com/lisk809/momizi/releases">
    <img src="https://img.shields.io/github/v/release/lisk809/sanae?color=blueviolet&include_prereleases" alt="release">
  </a>
</p>

<p align="center">
  <a href="https://sanae.js.org/">文档</a>
  ·
  <a href="https://sanae.js.org/starter">开始使用</a>
</p>
<p align="center">
  <a href="https://sanae.js.org/">项目主页:momizi</a>
</p>


## 快速开始

```bash
npm install sanae -g
```

`sanae`用来实现跨平台的设计模式是适配器，因此，仅仅sanae本体是不能直接使用的，你还需要对于不同平台的适配器，比如:

```bash
npm install @sanaejs/adapter-console
```

还需在sanae应用目录下的`sanae.yaml`中写上
```yaml
adapter:
  @sanaejs/adapter-console: {}
```

然后
```bash
npx sanae start
```

如果没有报错信息，恭喜🎉，成功开启使用sanae的第一个项目
