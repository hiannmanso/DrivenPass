

import {credentials} from '@prisma/client'
import credentialsRepository from '../repositories/credentials.repository.js'
import { encrypt } from '../utils/bcrypt.js'
import { cryptDesencode, cryptEncode } from '../utils/crypt.js'

export type credential = Omit<credentials,'id'>
export async function newCredential(credentialInfos:credential) {
    const checkLabel = await credentialsRepository.getByUserIDandLabel(credentialInfos.userID,credentialInfos.label)
    console.log(checkLabel)
    if(checkLabel.length >= 1){
        throw{
            status:404,
            message:`this label already registered.`
        }
    }

    const hashPassword = cryptEncode(credentialInfos.password)
    const result = await credentialsRepository.insert({...credentialInfos,password:hashPassword})
    return result
}

export async function findCredentials(userID:number) {
    let allcredentials = []
    const credentials = await credentialsRepository.getByUserID(userID)
    console.log(credentials)
    if(!credentials){
        throw{
            status:400,
            message:`No one credential registred`
        }
    }
    for (const item of credentials) {
        const password = cryptDesencode(item.password)
        console.log(password)
        allcredentials.push({...item,password:password})
    }
    return allcredentials

}

export async function findOneCredential(id:number,userID:number) {
    const credential = await credentialsRepository.getByID(id)
    if(!credential){
        throw{
            status:400,
            message:`This credential do not are registred`
        }
    }
    if(credential.userID !== userID){
        throw{
            status:400,
            message:`This credential aren't your.`
        }
    }
    return credential
}

export async function deleteCredential(id:number,userID:number) {
    const credential = await credentialsRepository.getByID(id)
    console.log(credential.userID,userID)
    if(!credential){
        throw{
            status:400,
            message:`This credential do not are registred`
        }
    }
    if(credential.userID !== userID){
        throw{
            status:400,
            message:`This credential aren't your.`
        }
    }
    const result = await credentialsRepository.deleteByID(id)
    return result
}


