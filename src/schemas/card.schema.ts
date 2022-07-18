import Joi from "joi"
import { card } from "../repositories/card.repository"



export const cardSchema = Joi.object<card>({
    cardName:Joi.string().required(),
    cardNumber:Joi.string().required(),
    cardType:Joi.string().valid("crédito","débito","crédito e débito","credito","debito","debito e credito").required(),
    cvc:Joi.string().required().length(3),
    expirationDate:Joi.string().required(),
    isVirtual:Joi.boolean().required(),
    label:Joi.string().required(),
    password:Joi.string().required(),
    
})