import {Router } from 'express'
import authRouter from './auth.router.js'
import cardRouter from './cards.router.js'
import credentialsRouter from './credentials.router.js'
import secureNotesRouter from './secureNotes.router.js'
import wifiRouter from './wifi.router.js'



const router = Router()
router.use(authRouter)
router.use(credentialsRouter)
router.use(secureNotesRouter)
router.use(wifiRouter)
router.use(cardRouter)

export default router