// @ts-ignore body不在request的定义上屏蔽此错误
import { Controller, get } from 'koa-router-decorators-up'
import * as Koa from 'koa'
@Controller('/test')
export default class startApi {
    // 括号中如果不传入参数  则自动拼接url 即：/test/getIndex
    @get()
    async getIndex(ctx: Koa.Context, next: Function) {
        ctx.body = {
            a : 66666
        }
    }
    @get('/getString')
    async getString(ctx: Koa.Context, next: Function) {
        ctx.body = 'koa2 string'
    }
}
