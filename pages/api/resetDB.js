import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    await prisma.$connect()
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
        console.log(resettedMembers)
        res.status(200).redirect('/')
    } catch (err) {
        console.log(err)
        res.status(403).json({err: "Error"})
    }
    await prisma.$disconnect()
}