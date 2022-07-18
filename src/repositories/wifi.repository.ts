import { wifi } from "@prisma/client"
import { prisma } from "../configs/database.js"


export type wifis = Omit<wifi,"id">
async function insert(wifiInformations:wifis) {
    return prisma.wifi.create({data:
         {networkName:wifiInformations.networkName,
            label:wifiInformations.label,
            password:wifiInformations.password,
            userID:wifiInformations.userID

        }})
}
async function getByUserIDandLabel(userID:number,label:string) {

    return prisma.wifi.findMany({where:{userID,label}})
}
async function getByUserID(userID:number) {
    return prisma.wifi.findMany({where:{userID}})
}
async function getByID(id:number) {
    return prisma.wifi.findUnique({where:{id}})
}
async function deleteByID(id:number) {
    return prisma.wifi.delete({where:{id}})
}
const wifiRepository = {
    insert,
    getByUserIDandLabel,
    getByUserID,
    getByID,
    deleteByID,
}



export default wifiRepository