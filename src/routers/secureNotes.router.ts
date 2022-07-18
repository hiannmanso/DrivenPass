import {Router} from 'express'
import { secureNotesDELETE, secureNotesPOST, showOneSecureNoteGET, showSecureNotesGET } from '../controllers/secureNotes.controller.js'
import { validateSchema } from '../middlewares/validateSchema.js'
import { secureNoteSchema } from '../schemas/secureNote.schema.js'


const secureNotesRouter = Router()

secureNotesRouter.post('/secureNotes',validateSchema(secureNoteSchema),secureNotesPOST)
secureNotesRouter.get('/secureNotes',showSecureNotesGET)
secureNotesRouter.get('/secureNotes/:id',showOneSecureNoteGET)
secureNotesRouter.delete('/secureNotes/delete/:id',secureNotesDELETE)

export default secureNotesRouter