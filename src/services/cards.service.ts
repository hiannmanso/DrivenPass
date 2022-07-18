import cardRepository, { card } from "../repositories/card.repository.js"
import { cryptDesencode, cryptEncode } from "../utils/crypt.js"

export async function newCard(cardInfos:card) {
    const checkLabel = await cardRepository.getByUserIDandLabel(cardInfos.userID,cardInfos.label)
    console.log(checkLabel)
    if(checkLabel.length >= 1){
        throw{
            status:404,
            message:`this label already registered.`
        }
    }

    const hashPassword = cryptEncode(cardInfos.password)
    const result = await cardRepository.insert({...cardInfos,password:hashPassword})
    return result
}

export async function findCards(userID:number) {
    let allcards = []
    const card = await cardRepository.getByUserID(userID)
    console.log(card)
    if(!card){
        throw{
            status:400,
            message:`No one card registred`
        }
    }
    for (const item of card) {
        const password = cryptDesencode(item.password)
        console.log(password)
        allcards.push({...item,password:password})
    }
    return allcards

}

export async function findOneCard(id:number,userID:number) {
    const cards = await cardRepository.getByID(id)
    if(!cards){
        throw{
            status:400,
            message:`This cards do not are registred`
        }
    }
    if(cards.userID !== userID){
        throw{
            status:400,
            message:`This cards aren't your.`
        }
    }
    return cards
}

export async function deleteCard(id:number,userID:number) {
    const cards = await cardRepository.getByID(id)
    console.log(cards.userID,userID)
    if(!cards){
        throw{
            status:400,
            message:`This credential do not are registred`
        }
    }
    if(cards.userID !== userID){
        throw{
            status:400,
            message:`This credential aren't your.`
        }
    }
    const result = await cardRepository.deleteByID(id)
    return result
}

