import { prisma } from "../configs/database.js"
import { credential } from "../services/credentials.service.js"


async function insert(credentialInfos:credential) {
    return prisma.credentials.create({data:
         {url:credentialInfos.url,
            username:credentialInfos.username,
            password:credentialInfos.password,
            label:credentialInfos.label,
            userID:credentialInfos.userID
        }})
}
async function getByUserIDandLabel(userID:number,label:string) {

    return prisma.credentials.findMany({where:{userID,label}})
}
async function getByUserID(userID:number) {
    return prisma.credentials.findMany({where:{userID}})
}
async function getByID(id:number) {
    return prisma.credentials.findUnique({where:{id}})
}
async function deleteByID(id:number) {
    return prisma.credentials.delete({where:{id}})
}
const credentialsRepository = {
    insert,
    getByUserIDandLabel,
    getByUserID,
    getByID,
    deleteByID,
}



export default credentialsRepository