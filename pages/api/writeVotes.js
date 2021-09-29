import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
    const data = req.query

    try {
        const oldMember = await prisma.member.findUnique({
            where: {
                Name: data.Name
            }
        })
        
        if (oldMember == null) {
            await prisma.member.create({
                data: {
                    Name: data.Name,
                    LP: data.LP,
                    SG: data.SG,
                    Votes: 1
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

        const newMember = await prisma.member.findUnique({
            where: {
                Name: data.Name
            }
        })
        // res.status(200).json(newMember)
        console.log(newMember)
        res.status(200).redirect('/')
    } catch (err) {
        console.log(err)
        res.status(403).redirect('/')
    }
}