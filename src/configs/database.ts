import pkg from "@prisma/client"
import chalk from "chalk"
const { PrismaClient } = pkg;
console.log(chalk.italic.bold.hex('#ffbdd6')('Postgres database connected.'))
export const prisma = new PrismaClient();

