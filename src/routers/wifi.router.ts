import {Router} from 'express'
import { showOneWifiGET, showWifsGET, wifiDELETE, wifiPOST } from '../controllers/wifi.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { wifisSchema } from '../schemas/wifi.schema.js'



const wifiRouter = Router()

wifiRouter.post('/wifi',validateSchema(wifisSchema),wifiPOST)
wifiRouter.get('/wifi',showWifsGET)
wifiRouter.get('/wifi/:id',showOneWifiGET)
wifiRouter.delete('/wifi/delete/:id',wifiDELETE)

export default wifiRouter