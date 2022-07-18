import { Request, Response } from "express";
import { deleteCard, findCards, findOneCard, newCard } from "../services/cards.service.js";
import { getUserIDbyToken } from "../utils/token.js";


export async function cardPOST(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
    const result = await newCard({...req.body,userID:checkToken.userID})

    res.status(200).send(result)
}

export async function showCardsGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
        
    const result = await findCards(checkToken.userID)
    res.status(200).send(result)
}

export async function showOneCardGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    const result = await findOneCard(Number(id),checkToken.userID)
    res.status(200).send(result)
}

export async function cardDELETE(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    console.log(checkToken)
    const result = await deleteCard(Number(id),checkToken.userID)

    res.status(200).send(`DELETED CARD:{
        ${result}
    }`)
}
