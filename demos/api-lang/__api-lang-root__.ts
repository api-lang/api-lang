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

// 自定义的数据及数据结构
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
