import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    await prisma.$connect()
    const data = req.query

    try {
        const oldMember = await prisma.member.findUnique({
            where: {
                Name: data.Name
            }
        })

        if (oldMember == null) {
            const color = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
            await prisma.member.create({
                data: {
                    Name: data.Name,
                    LP: parseFloat(data.LP),
                    SG: parseFloat(data.SG),
                    Votes: 1,
                    backgroundColor: color + ',0.05)',
                    borderColor: color + ',1)'
                }
            })
        } else {
            await prisma.member.update({
                where: {
                    Name: data.Name
                },
                data: {
                    LP: (parseFloat(oldMember.LP) * parseFloat(oldMember.Votes) + parseFloat(data.LP)) / (parseFloat(oldMember.Votes) + 1),
                    SG: (parseFloat(oldMember.SG) * parseFloat(oldMember.Votes) + parseFloat(data.SG)) / (parseFloat(oldMember.Votes) + 1),
                    Votes: oldMember.Votes + 1
                }
            })
        }

        const oldMean = await prisma.member.findUnique({
            where: {
                Name: "Chatuba"
            }
        })

        if (oldMean == null) {
            const color = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255)
            await prisma.member.create({
                data: {
                    Name: "Chatuba",
                    LP: parseFloat(data.LP),
                    SG: parseFloat(data.SG),
                    Votes: 1,
                    backgroundColor: color + ',0.05)',
                    borderColor: color + ',1)'
                }
            })
        } else {
            await prisma.member.update({
                where: {
                    Name: "Chatuba"
                },
                data: {
                    LP: (parseFloat(oldMean.LP) * parseFloat(oldMean.Votes) + parseFloat(data.LP)) / (parseFloat(oldMean.Votes) + 1),
                    SG: (parseFloat(oldMean.SG) * parseFloat(oldMean.Votes) + parseFloat(data.SG)) / (parseFloat(oldMean.Votes) + 1),
                    Votes: oldMean.Votes + 1
                }
            })
        }
        
        res.status(200).redirect('/')
    } catch (err) {
        console.log(err)
        res.status(403).redirect('/')
    }
    await prisma.$disconnect()
}