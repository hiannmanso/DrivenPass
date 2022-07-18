import Joi from "joi"
import { credential } from "../services/credentials.service.js"



export const credentialSchema = Joi.object<credential>({
   url:Joi.string().pattern(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/).required(),
   label:Joi.string().required(),
   password:Joi.string().required(),
   username:Joi.string().required(),
})