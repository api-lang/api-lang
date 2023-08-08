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
  __api-lang-root__.ts // meta文件, 用于描述整个api-lang文档
  user // group, 用户组, group一定是目录
    __group__.ts // meta文件, 用于描述group, group目录下必须有, 没有 __group__.ts 的目录只是普通的目录
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

暂无, 可以不创建这个文件

## `__api-lang-root__.ts`

该文件可以没有, 也可以不导出任何类型和数据

导出的有效类型有: BasicApi

导出的有效数据有: VERSION、init

```typescript
import type { AxiosInstance } from "axios";

// 当前api的版本, 可以是任意字符串, 建议用年月份区分版本
// 比如bilibili-api在2023与2022年的api变化很大, 2023年的api不能兼容2022年, 就需要更新版本号, 如果是渐进式的增加api能力, 能兼容之前的api, 那就不需要更新版本号
export const VERSION = "2023.01";

// 通用的response结构
export type BasicApi<T> = {
  /** 0为成功 */
  code: number;
  data: T;
  message: string;
};

// ctx是自定义的数据及数据结构
interface Ctx {
  credential?: {
    sessdata: string;
    bili_jct: string;
    dedeuserid: string;
  };
  proxy?: AxiosProxyConfig;
}

// 初始化, 对应的就是 `sdk.init(ctx: Ctx);`
export const init = (axios: AxiosInstance, ctx: Ctx) => {
  // 请求拦截, 相当于中间件做数据处理
  axios.interceptors.request.use((config) => {
    // cookie的操作: https://github.com/salesforce/tough-cookie
    config.jar.setCookieSync(...);
    // 其它操作: https://github.com/axios/axios
    config.headers.set(...);
    config.proxy = ctx.proxy;
    ...
    return config;
  });
  // 响应拦截
  axios.interceptors.response.use((response) => response.data);
  return axios;
};
```

## `__group__.ts`

```typescript
export const GROUP_DOC_NAME = "视频";
export const GROUP_TS_NAME = "video";
export const GROUP_ORDER = 3;
```

## `module` 文件

TODO
