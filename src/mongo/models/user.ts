import baseDocType from "../types"

const mongoose = require('mongoose')
let userSchema = new mongoose.Schema({
    username: String,
    password: String,
    createTime: Number,
    roles: {
        type: String,
        default: 'visitor'
    }
})
export interface userSchemaType extends baseDocType{
    username: string,
    password: string,
    createTime: number,
    roles: string
}
export default mongoose.model('user', userSchema)


