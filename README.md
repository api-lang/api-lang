# api-lang

关于 api-lang 的介绍和说明文档

1. 能方便地编写一整套按规则编写的 api 文档 (如 [@api-lang/bili-api](https://github.com/api-lang/bili-api) 下的 api-lang 目录)
2. 能自动生成一整套可读的文档 (如 markdown: [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect))
3. 直接生成 api 的 sdk 库 (支持各大主流语言, 如 bilibili-api-nodejs-sdk: [@api-lang/bili-api](https://www.npmjs.com/package/@api-lang/bili-api))
4. 能自动生成文档网站 (就像 [dumi](https://d.umijs.org/))
5. 编写的同时还有友好的提示、校验、报错
6. 在线运行 sdk 库, 编写到哪个接口能运行哪个接口, 所见即所得 (就像 [dumi](https://d.umijs.org/))

## 如何编写 `api-lang文档`

[doc](/API_LANG_DOC.md)

## 快速入门: 脚手架的使用

[doc](/CLI.md)

## 什么是 api-lang

- `api-lang` 是上述功能的框架名
- 维护 api 的人只需要编写的文档称为 `api-lang文档`

api-lang 顾名思义，用于描述 api。命名借鉴于 [bilibili-API-collect 社区的 discuss](https://github.com/SocialSisterYi/bilibili-API-collect/issues/604) —— `AML(API Mark Language)`

但目的不过是让开源贡献者用一套规则方便地书写一整套 api, 让第三方类库的编写者能直接接入并用于开发

总结目的:

1. 能方便地编写按规则编写的 api 文档
2. 能生成可读的文档 (如 readme)
3. 能接入到程序中

但我想: 为什么要定制一门 `AML` 呢, 本身编写 api 的 sdk 就是非常轻易、容易服用的事情, 可以看看开源社区里有多少的 api-sdk 了, 就单单看 bilibili-api 的 sdk, 就有好多, 比如 [bilibili-API-collect 收录的](https://github.com/SocialSisterYi/bilibili-API-collect#%E5%BA%93%E5%8F%8A%E6%96%87%E6%A1%A3) 就有不少， 更何况还有很多没被收录的

所以我的目的就是:

1. 能方便地编写一整套按规则编写的 `api-lang文档`
2. 能自动生成一整套可读的文档 (如 markdown)
3. 直接生成 api 的 sdk 库 (支持各大主流语言)

我还想再加几个目的:

4. 能自动生成文档网站 (就像 [dumi](https://d.umijs.org/))
5. 编写的同时还有友好的提示、校验、报错
6. 在线运行 sdk 库, 编写到哪个接口能运行哪个接口, 所见即所得 (就像 [dumi](https://d.umijs.org/))

有一套规则就够了, 还不能是标记语言, 能支持少量编程, 甚至不一定非要是一门语言, 在现有的编程语言上定制写法规则也未尝不可

这一整套解决方案, 我将之称为 `api-lang`, 尽管它(目前)不是 `lang`

## 细说 api-lang 框架

**`非typescript用户`先别慌, 在展望中, 各种语言的 sdk 都是支持的, 可以先展望展望, 有能力的一起搞开源**

我选择在 `typescript` 的基础上定制写法规则:

1. typescript 的类型编程能力首屈一指, 用 typescript 的类型编程能非常准确的编写出 api 的 params, data, headers, cookie, response, typescript 的类型编程能力是其它编程语言所达不到的。比如
2. api-lang 这套框架的编写, 用 typescript 更为高效快速且合适, 有兴趣的小伙伴可以看看这个文件: <https://github.com/api-lang/core/blob/master/src/generate/sdkFileContent.ts>, 其中用到了至关重要的 typescript 的类型编程, 这个优势是其它主流语言比不了的, 用其它语言开发成本肯定大得多 (用 typescript 一天半就写完了自动生成 sdk 的功能)
3. 我本身就擅长的也是 typescript, 学习成本问题, 不想用其它编程语言

其它语言:

1. 首先生成出来的是 node.js 类库, 结合桥接的方式供其它编程语言使用: 需要封装能够桥接通用 api-lang 的其它语言的类库 (看有没有小伙伴愿意实现, 这方面有点知识盲区了)
2. 直接搞其它语言版本的 api-lang 框架 (也是需要其它小伙伴来实现, 知识盲区+懒)

为什么不直接用 AML, 而要支持少量的编程:

每套 api 的 sdk 本身就包含着自己的逻辑, 比如 bilibili2023, 需要拦截所有的请求, 在每个请求头的 cookie 插入制定的字段和值

## v1 的 TODO-LIST

TODO

## 未来的展望

TODO
