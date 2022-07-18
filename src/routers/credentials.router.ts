import {Router} from 'express'
import { CredentialDELETE, credentialPOST, showCredentialsGET, showOneCredentialGET } from '../controllers/credentials.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { credentialSchema } from '../schemas/credential.schema.js'



const credentialsRouter = Router()

credentialsRouter.post('/credentials',validateSchema(credentialSchema),credentialPOST)
credentialsRouter.get('/credentials',showCredentialsGET)
credentialsRouter.get('/credentials/:id',showOneCredentialGET)
credentialsRouter.delete(`/credentials/delete/:id`,CredentialDELETE)

export default credentialsRouter