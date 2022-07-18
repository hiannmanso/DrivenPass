import { Router } from "express";
import { cardDELETE, cardPOST, showCardsGET, showOneCardGET } from "../controllers/cards.controller.js";

import { validateSchema } from "../middlewares/validateSchema.js";
import { cardSchema } from "../schemas/card.schema.js";



const cardRouter = Router();

cardRouter.post('/cards',validateSchema(cardSchema),cardPOST)
cardRouter.get('/cards',showCardsGET)
cardRouter.get('/cards/:id',showOneCardGET)
cardRouter.delete('/cards/delete/:id',cardDELETE)
export default cardRouter