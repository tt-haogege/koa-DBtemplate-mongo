
import { Controller, get, post } from 'koa-router-decorators-up'
import { Context, Next } from 'koa';
import userSchema, { userSchemaType } from '../mongo/models/user'
@Controller('/user')
export default class user {
    @post('/add')
    async getIndex(ctx: Context, next: Next) {

        const { username, password }: {
            username: string,
            password: string
        // @ts-ignore body不在request的定义上屏蔽此错误
        } = ctx.request.body
        const newUser: userSchemaType = await userSchema.create({ username, password, createTime: new Date().getTime() })
        console.log(newUser)
        if (newUser) {
            ctx.body = {
                newUser
            }
        } else {
            ctx.body = {
                msg: '出错了'
            }
        }
    }
    @get('/findalluser')
    async getString(ctx: Context, next: Next) {
        const userList: userSchemaType[] = await userSchema.find({})
        if (userList && userList.length) {
            ctx.body = {
                userList
            }
        }
    }
}
