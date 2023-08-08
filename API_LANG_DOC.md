# 如何编写 `api-lang文档`

## 参考

有现成的例子可以参考: [@api-lang/bili-api](https://github.com/api-lang/bili-api) 下的 api-lang 目录

或者参照这个仓库下的 demos/api-lang 目录

## 基础概念

三个核心概念:

1. group
2. module
3. meta
4. help

单个 api 对应的文件称为 `module`

`group` 是对 `module` 的划分, 比如 登陆注册、获取用户信息 都属于 用户组, 这里将组称为 `group`. 当然, 可以有游离在 `group` 之外的 `module`

`meta` 是用于描述整个 `api-lang文档`、`group`、`module` 的描述性文件

`help` 是用于辅助整个 `api-lang文档` 的编写的, 因为每个 `module` 都是 ts 代码, 如果文件里有些杂七杂八与文档不相关的代码也很难维护, `help` 就像模块分离一样, 把一些辅助代码抽离到 `help` 中进行存储, 然后在对应的 ts 文件中进行导入

## 目录结构

随便举个例子

```
api-lang
  __api-lang-root__.ts
  user
    __group__.ts
    myInfo.ts
  healthy.ts
  groupA
    __group__.ts
    groupB
    __group__.ts
    a.help.ts
      moduleA.ts
      b.help.ts
api-lang.config.json
```

详细描述:

```
api-lang // 根目录, 叫什么都可以, 推荐统一用 `api-lang` 命名
  __api-lang-root__.ts // meta文件, 用于描述整个api-lang文档, 根目录下必须有
  user // group, 用户组, group一定是目录
    __group__.ts // meta文件, 用于描述group, group目录下必须有
    myInfo.ts // module文件, 对应单个api
  healthy.ts // 游离在 `group` 之外的 `module`
  groupA
    __group__.ts
    groupB
    __group__.ts
    a.help.ts // help文件, 必须以 `.help.ts` or `.help.json` 为后缀
      moduleA.ts
      b.help.ts
api-lang.config.json // api-lang的总配置
```

build 后的 sdk: 调用为 `apiKit.user.myInfo(...)` and `apiKit.healthy(...)` and `apiKit.groupA.groupB.moduleA(...)`

## `api-lang.config.json`

## `__api-lang-root__.ts`

## `__group__.ts`

## `module` 文件

TODO
