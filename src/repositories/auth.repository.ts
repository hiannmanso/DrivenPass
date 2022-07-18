import { prisma } from "../configs/database.js";



async function insert(email:string,password:string) {
    const result =  await prisma.accounts.create({data:{email,password}})
    return result
}

async function getByEmail(email:string) {
    const result = await prisma.accounts.findUnique({where:{email}})
    return result
}


export const authRepository ={
    insert,
    getByEmail,
}