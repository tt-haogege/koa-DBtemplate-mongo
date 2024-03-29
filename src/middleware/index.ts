import * as Koa from 'koa'
const logger = require('koa-logger')
const json = require('koa-json')
const views = require('koa-views')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
import connectMongo from '../mongo/index'
import userlogger from './logger'
/**
 * 加载中间件
 *  
 * */
export default (app: Koa) => {
    app.use(bodyparser({
        formLimit: "50mb",
        jsonLimit: "50mb",
        textLimit: "50mb",
        enableTypes: ['json', 'form', 'text']
    }))
    // 连接mongodb
    connectMongo()
    app.use(json())
    app.use(logger())
    app.use(views(__dirname + '../views', {
        extension: 'ejs'
    }))
    app.use(userlogger)
}
