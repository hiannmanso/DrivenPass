import { Request, Response } from "express";
import { createNewAccount, signIn } from "../services/auth.service.js";


export async function createNewAccountPOST(req:Request,res:Response) {
    const {email,password}:{email:string,password:string} = req.body
    await createNewAccount(email,password)

    res.status(201).send(`Account created with sucess!`)
}

export async function signInGET(req:Request,res:Response) {
    const {email,password}:{email:string,password:string} = req.body
    const token = await signIn(email,password)
    res.status(201).send(`Acess token :{
        ${token}
    }`)
}
