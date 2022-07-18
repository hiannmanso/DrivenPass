import Joi from "joi"
import {accounts} from '@prisma/client'


export type accountWithoutID = Omit<accounts,'id'>
export const accountSchema = Joi.object<accountWithoutID>({
    email:Joi.string().email().required(),
    password:Joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{10,}$/).required()
})