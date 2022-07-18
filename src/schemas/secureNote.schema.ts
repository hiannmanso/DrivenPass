import Joi from "joi"
import { secureNote } from "../repositories/secureNotes.repository.js"



export const secureNoteSchema = Joi.object<secureNote>({
  annotation:Joi.string().max(1000).required(),
  label:Joi.string().required(),
  title:Joi.string().required().max(50),

})