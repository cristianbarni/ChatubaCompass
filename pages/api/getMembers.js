import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    const data = req.body
    try {
        const members = await prisma.member.findMany()
        res.status(200).json(members)
    } catch (err) {
        console.log(err)
        res.status(403).json({err: "Error"})
    }
}