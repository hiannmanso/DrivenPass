import {Router} from 'express'
import { createNewAccountPOST, signInGET } from '../controllers/auth.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { accountSchema } from '../schemas/account.schema.js'


const authRouter = Router()

authRouter.post('/signup',validateSchema(accountSchema),createNewAccountPOST)
authRouter.get('/signin',validateSchema(accountSchema),signInGET)

export default authRouter