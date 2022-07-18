import wifiRepository, { wifis } from "../repositories/wifi.repository.js"
import { cryptDesencode, cryptEncode } from "../utils/crypt.js"

export async function newWifi(wifiInfos:wifis) {
    const checkLabel = await wifiRepository.getByUserIDandLabel(wifiInfos.userID,wifiInfos.label)
    console.log(checkLabel)
    if(checkLabel.length >= 1){
        throw{
            status:404,
            message:`this label already registered.`
        }
    }

    const hashPassword = cryptEncode(wifiInfos.password)
    const result = await wifiRepository.insert({...wifiInfos,password:hashPassword})
    return result
}

export async function findWifis(userID:number) {
    let AllWifis = []
    const wifis = await wifiRepository.getByUserID(userID)
    // console.log(credentials)
    if(!wifis){
        throw{
            status:400,
            message:`No one wifi registred`
        }
    }
    for (const item of wifis) {
        const password = cryptDesencode(item.password)
        // console.log(password)
        AllWifis.push({...item,password:password})
    }
    return AllWifis

}

export async function findOneWifi(id:number,userID:number) {
    const wifi = await wifiRepository.getByID(id)
    if(!wifi){
        throw{
            status:400,
            message:`This wifi do not are registred`
        }
    }
    if(wifi.userID !== userID){
        throw{
            status:400,
            message:`This wifi aren't your.`
        }
    }
    return wifi
}
export async function deleteWifi(id:number,userID:number) {
    const wifi = await wifiRepository.getByID(id)
 
    if(!wifi){
        throw{
            status:400,
            message:`This wifi do not are registred`
        }
    }
    if(wifi.userID !== userID){
        throw{
            status:400,
            message:`This wifi aren't your.`
        }
    }
    const result = await wifiRepository.deleteByID(id)
    return result
}
