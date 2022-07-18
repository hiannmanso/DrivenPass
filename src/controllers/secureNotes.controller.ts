import { Request, Response } from "express";


import { deleteCredential, findCredentials, findOneCredential, newCredential } from "../services/credentials.service.js";
import { deleteSecureNote, findOneSecureNote, findSecureNotes, newSecureNote } from "../services/secureNotes.service.js";
import { decodeToken, getUserIDbyToken } from "../utils/token.js";



export async function secureNotesPOST(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
    const result = await newSecureNote({...req.body,userID:checkToken.userID})

    res.status(200).send(result)
}

export async function showSecureNotesGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const checkToken = getUserIDbyToken(authorization)
        
    const result = await findSecureNotes(checkToken.userID)
    res.status(200).send(result)
}

export async function showOneSecureNoteGET(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    const result = await findOneSecureNote(Number(id),checkToken.userID)
    res.status(200).send(result)
}

export async function secureNotesDELETE(req:Request,res:Response) {
    const { authorization } = req.headers;
    const { id } = req.params
    if(!id){
        res.status(400).send(`Id do not been send`)
    }
    
    const checkToken= getUserIDbyToken(authorization)
    const result = await deleteSecureNote(Number(id),checkToken.userID)

    res.status(200).send(`DELETED secureNote:{
        ${result}
    }`)
}