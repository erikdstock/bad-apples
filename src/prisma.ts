import { PrismaClient } from "@prisma/client"
// or const { PrismaClient } = require('@prisma/client')

export const prisma = new PrismaClient()
export default prisma
