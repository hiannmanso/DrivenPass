import Joi from "joi"
import { wifis } from "../repositories/wifi.repository.js"



export const wifisSchema = Joi.object<wifis>({
  label:Joi.string().required(),
  networkName:Joi.string().required(),
  password:Joi.string().required(),

})