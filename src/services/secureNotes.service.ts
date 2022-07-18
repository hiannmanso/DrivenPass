import secureNotesRepository, { secureNote } from "../repositories/secureNotes.repository.js"
import { cryptEncode } from "../utils/crypt.js"

export async function newSecureNote(secureNotes:secureNote) {
    const checkLabel = await secureNotesRepository.getByUserIDandLabel(secureNotes.userID,secureNotes.label)
    console.log(checkLabel)
    if(checkLabel.length >= 1){
        throw{
            status:404,
            message:`this label already registered.`
        }
    }


    const result = await secureNotesRepository.insert(secureNotes)
    return result
}

export async function findSecureNotes(userID:number) {
    const secureNote = await secureNotesRepository.getByUserID(userID)
    if(!secureNote){
        throw{
            status:400,
            message:`No one secure note registred`
        }
    }
   
    return secureNote

}

export async function findOneSecureNote(id:number,userID:number) {
    const secureNote = await secureNotesRepository.getByID(id)
    if(!secureNote){
        throw{
            status:400,
            message:`This secureNote do not are registred`
        }
    }
    if(secureNote.userID !== userID){
        throw{
            status:400,
            message:`This secureNote aren't your.`
        }
    }
    return secureNote
}


export async function deleteSecureNote(id:number,userID:number) {
    const secureNote = await secureNotesRepository.getByID(id)
    if(!secureNote){
        throw{
            status:400,
            message:`This secureNote do not are registred`
        }
    }
    if(secureNote.userID !== userID){
        throw{
            status:400,
            message:`This secureNote aren't your.`
        }
    }
    const result = await secureNotesRepository.deleteByID(id)
    return result
}