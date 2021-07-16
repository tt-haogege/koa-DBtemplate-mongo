const mongoose = require('mongoose')
import mongoConfig from './config'

// 连接mongdb数据库
export default function () {
    mongoose.connect(mongoConfig.dbs, {
        useFindAndModify: false,
        useNewUrlParser: true, 
        useUnifiedTopology: true
    })
}