**Misaka の** 💭

本仓库为 Github 自动构建的静态页面

Blog 运用 Github 和 Vercel 双线部署，默认托管于 Vercel

Github Page 已做**重定向**

部署流程：

- [x] 提交更新至 Blog 源码仓库（私有）

- [x] 触发 Action 自动构建，将构建好的静态文件推送至本仓库并同步源码更新

  - [x] 本仓库收到推送，触发自动构建并生成[静态页面](https://Misaka-2020.github.io)（已重定向）

  - [x] Vercel 检测到推送，触发自动构建并生成[静态页面](https://likeme.moe)（Blog 地址）

- [x] 部署完成

