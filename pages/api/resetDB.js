import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    try {
        const lastMembers = await prisma.member.findMany()
        for (let member of lastMembers) {
            await prisma.member.update({
                where: {
                    Name: member.Name
                },
                data: {
                    LP: 0,
                    SG: 0,
                    Votes: 0
                }
            })
        }
        const resettedMembers = await prisma.member.findMany()
        res.status(200).json(resettedMembers)
    } catch (err) {
        console.log(err)
        res.status(403).json({err: "Error"})
    }
}