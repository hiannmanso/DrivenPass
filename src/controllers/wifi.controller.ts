import { Request, Response } from "express";
import { deleteWifi, findOneWifi, findWifis, newWifi } from "../services/wifi.service.js";
import { decodeToken, getUserIDbyToken } from "../utils/token.js";


export async function wifiPOST(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
    const result = await newWifi({...req.body,userID:checkToken.userID})

    res.status(200).send(result)
}

export async function showWifsGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
        
    const result = await findWifis(checkToken.userID)
    res.status(200).send(result)
}

export async function showOneWifiGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    const result = await findOneWifi(Number(id),checkToken.userID)
    res.status(200).send(result)
}
export async function wifiDELETE(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    console.log(checkToken)
    const result = await deleteWifi(Number(id),checkToken.userID)

    res.status(200).send(`DELETED WIFI:{
        ${result}
    }`)
}