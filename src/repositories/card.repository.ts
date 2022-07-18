import { cards, wifi } from "@prisma/client"
import { prisma } from "../configs/database.js"


export type card = Omit<cards,"id">
async function insert(cardsInformations:cards) {
    return prisma.cards.create({data:
         {cardName:cardsInformations.cardName,
            cardNumber:cardsInformations.cardNumber,
            cardType:cardsInformations.cardType,
            cvc:cardsInformations.cvc,
            expirationDate:cardsInformations.expirationDate,
            isVirtual:cardsInformations.isVirtual,
            userID:cardsInformations.userID,
            label:cardsInformations.label,
            password:cardsInformations.password
        }})
}
async function getByUserIDandLabel(userID:number,label:string) {

    return prisma.cards.findMany({where:{userID,label}})
}
async function getByUserID(userID:number) {
    return prisma.cards.findMany({where:{userID}})
}
async function getByID(id:number) {
    return prisma.cards.findUnique({where:{id}})
}
async function deleteByID(id:number) {
    return prisma.cards.delete({where:{id}})
}
const cardRepository = {
    insert,
    getByUserIDandLabel,
    getByUserID,
    getByID,
    deleteByID,
}



export default cardRepository