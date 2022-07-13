import pg from 'pg'
import dotenv from 'dotenv'
import chalk from 'chalk'

dotenv.config()

const { Pool } = pg
const configDatabase:any = {
	connectionString: process.env.DATABASE_URL,
}

if (process.env.MODE === 'PROD') {
	configDatabase.ssl = {
		rejectUnauthorized: false,
	}
}

const db = new Pool(configDatabase)
console.log(chalk.italic.bold.hex('#ffbdd6')('Postgres database connected.'))
export default db