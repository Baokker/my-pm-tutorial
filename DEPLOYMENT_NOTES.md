# GitHub Pages 路由 404 排查记录

## 问题现象

站点首页可以正常访问，但章节目录页会 404，例如：

```text
https://baokker-blog.top/my-pm-tutorial/07-data-driven/
```

## 根本原因

这个项目使用 VitePress 构建静态站点，并部署到 GitHub Pages。

原来每个章节的概览文件命名为 `README.md`，VitePress 构建后会生成：

```text
07-data-driven/README.html
```

但首页卡片和导航链接使用的是目录地址：

```text
/07-data-driven/
```

GitHub Pages 访问目录地址时，会默认寻找：

```text
07-data-driven/index.html
```

由于构建产物里没有 `07-data-driven/index.html`，所以目录地址返回 404。

## 修复方式

把各章节目录页从 `README.md` 改成 `index.md`：

```text
tutorials/07-data-driven/README.md -> tutorials/07-data-driven/index.md
```

这样 VitePress 会生成：

```text
07-data-driven/index.html
```

同时把导航、侧边栏和正文中的章节概览链接统一改为目录地址：

```text
/07-data-driven/
```

## 如何排查另一个项目

如果另一个 VitePress 项目也有同样问题，可以按这个顺序检查：

1. 查看页面源码或配置里是否有 `/xxx/` 这种目录链接。
2. 本地运行 `npm run docs:build`。
3. 检查构建产物里是否存在对应的 `xxx/index.html`。
4. 如果只存在 `xxx/README.html`，说明原因相同。
5. 将该目录下的 `README.md` 改成 `index.md`，再把链接统一成 `/xxx/`。

## 经验结论

静态站点部署到 GitHub Pages 时，目录 URL 必须有对应的 `index.html`。如果希望访问 `/chapter/`，源码里最好使用 `chapter/index.md`，不要用 `chapter/README.md` 承载目录页。
