
import Cryptr from 'cryptr'
import dotenv from 'dotenv'

dotenv.config()
export function cryptEncode(item:string) {
    const cryptr = new Cryptr(process.env.CRYPTR_PSSWRD)
    return cryptr.encrypt(item)
}

export function cryptDesencode(item:string){
    const cryptr = new Cryptr(process.env.CRYPTR_PSSWRD)
    return cryptr.decrypt(item)
}