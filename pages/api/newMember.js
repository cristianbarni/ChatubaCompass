import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    await prisma.$connect()
    const data = req.query

    try {
        const color = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
        await prisma.newMember.create({
            data: {
                Name: data.Name,
                LP: 0,
                SG: 0,
                Votes: 0,
                backgroundColor: color + ',0.05)',
                borderColor: color + ',1)'
            }
        })
        res.status(200).redirect('/')
    } catch (err) {
        console.log(err)
        res.status(403).redirect('/')
    }
    await prisma.$disconnect()
}