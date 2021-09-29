import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function resetDB() {
    await prisma.$connect()

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

    await prisma.$disconnect()
}

async function writeToDB(vote) {
    await prisma.$connect()

    const oldMember = await prisma.member.findUnique({
        where: {
            Name: vote.Name
        }
    })

    if (oldMember == null) {
        await prisma.member.create({
            data: {
                Name: vote.Name,
                LP: vote.LP,
                SG: vote.SG,
                Votes: 1
            }
        })
    } else {
        await prisma.member.update({
            where: {
                Name: vote.Name
            },
            data: {
                LP: (oldMember.LP * oldMember.Votes + vote.LP) / (oldMember.Votes + 1),
                SG: (oldMember.SG * oldMember.Votes + vote.SG) / (oldMember.Votes + 1),
                Votes: oldMember.Votes + 1
            }
        })
    }

    const newMember = await prisma.member.findUnique({
        where: {
            Name: vote.Name
        }
    })
    console.log(newMember)

    await prisma.$disconnect()
}

export async function getNamesFromDB() {
    await prisma.$connect()

    const members = await prisma.member.findMany()

    const names = members.map((member) => {
        return member.Name
    })

    await prisma.$disconnect()
    console.log(names)
}

// resetDB()



// const vote = {
//     Name: "Kula",
//     LP: 0,
//     SG: 2,
// }

// writeToDB(vote)

getNamesFromDB()