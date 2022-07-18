import bcrypt from 'bcrypt'


export  function encrypt(item:string) {
    const hashedItem =  bcrypt.hashSync(item,10)
    return hashedItem
}


export function desencrypt(item:string,hashedItem:string){
    const desencryptedItem = bcrypt.compareSync(item,hashedItem)
    return desencryptedItem
}

