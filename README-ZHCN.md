![eracraft logo](packages/backend/app-icon.svg)

# eracraft

eracraft 是一个受 emuera 和 eramaker 启发的框架，旨在让游戏开发与模组制作更简单。

## 如何搭建开发环境

- 克隆本仓库
- 使用`pnpm i`安装依赖
- 下载所需的`.ttf`文件，并将其放置到`packages/frontend/public/fonts/`目录下
- 使用`pnpm icon`生成图标

## 如何贡献

### 参与`Discussions`讨论和`Issues`分类

- 查看未解决的问题，妥善分类；
- 参与讨论并提出解决方案；

### 提交Issue

- 报告Bug；
- 提交功能请求；
- 提供改进建议；

### 提交Pull Request

- 完成代码修改；
- 使用`pnpm commit`提交修改；
- 添加或更新测试，并确保全部通过；
- 运行`pnpm dev`、`pnpm build`，确保没有报错；
- 提交Pull Request；

## 开发模组

- 阅读[模组开发文档](./docs/mods/README.md)；

## 发布流程

- 使用`pnpm bump`更新版本号；
- 使用`pnpm changelog`更新ChangeLog；
- 使用`pnpm bump:commit`提交版本更新，记得选择`as-is`；
- 使用`git push`推送分支；
- 使用`pnpm push:tags`推送标签；