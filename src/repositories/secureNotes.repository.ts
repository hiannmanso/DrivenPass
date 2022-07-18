import { credentials, secureNotes } from "@prisma/client"
import { prisma } from "../configs/database.js"


export type secureNote = Omit<secureNotes,"id">
async function insert(secureNotes:secureNote) {
    return prisma.secureNotes.create({data:
         {title:secureNotes.title,
            annotation:secureNotes.annotation,
            label:secureNotes.label,
            userID:secureNotes.userID,
        }})
}
async function getByUserIDandLabel(userID:number,label:string) {

    return prisma.secureNotes.findMany({where:{userID,label}})
}
async function getByUserID(userID:number) {
    return prisma.secureNotes.findMany({where:{userID}})
}
async function getByID(id:number) {
    return prisma.secureNotes.findUnique({where:{id}})
}
async function deleteByID(id:number) {
    return prisma.secureNotes.delete({where:{id}})
}
const secureNotesRepository = {
    insert,
    getByUserIDandLabel,
    getByUserID,
    getByID,
    deleteByID,
}



export default secureNotesRepository