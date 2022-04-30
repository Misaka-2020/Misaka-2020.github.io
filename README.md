**Misaka の 💭**

- [x] 本仓库为 Github 自动构建的静态页面

采用双线部署，默认托管于 [Vercel](https://vercel.com) 

Github Page 已重定向至 [Blog 地址](https://blog.likeme.moe)

部署流程：

* git 推送至 Blog 源码仓库（私有）

* 触发 Actions 自动构建，自动将构建好的静态文件推送至本仓库，并同步构建的更新

  * 本仓库收到推送，触发自动构建，生成[静态页面](https://Misaka-2020.github.io)（已重定向至 [Blog 地址](https://blog.likeme.moe)）

  * Vercel 收到推送，触发自动构建，生成[静态页面](https://blog.likeme.moe)

* 部署完成


