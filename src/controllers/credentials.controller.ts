import { Request, Response } from "express";


import { deleteCredential, findCredentials, findOneCredential, newCredential } from "../services/credentials.service.js";
import { decodeToken, getUserIDbyToken } from "../utils/token.js";



export async function credentialPOST(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
    const result = await newCredential({...req.body,userID:checkToken.userID})

    res.status(200).send(result)
}

export async function showCredentialsGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
        
    const result = await findCredentials(checkToken.userID)
    res.status(200).send(result)
}

export async function showOneCredentialGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    const result = await findOneCredential(Number(id),checkToken.userID)
    res.status(200).send(result)
}

export async function CredentialDELETE(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    console.log(checkToken)
    const result = await deleteCredential(Number(id),checkToken.userID)

    res.status(200).send(`DELETED CREDENTIAL:{
        ${result}
    }`)
}