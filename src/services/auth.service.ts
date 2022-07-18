import { prisma } from "@prisma/client";
import { authRepository } from "../repositories/auth.repository.js";
import { desencrypt, encrypt } from "../utils/bcrypt.js";
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import { generateToken } from "../utils/token.js";

dotenv.config()

export async function createNewAccount(email:string,password:string) {
    const haveAccount = await authRepository.getByEmail(email)
    if(haveAccount){
        throw{
            status:401,
            message:`Email already used.`
        }
    }
    const hashedPassword = encrypt(password)
    await authRepository.insert(email,hashedPassword)

}

export async function signIn(email:string,password:string) {
    const haveAccount = await authRepository.getByEmail(email)
    if(!haveAccount){
        throw{
            status:401,
            message:`Email incorrect.`
        }
    }
    if (!desencrypt(password,haveAccount.password)){
        throw{
            status:401,
            message:'Password incorrect'
        }
    }
    const token = generateToken(haveAccount.id)
    return token
}

