import { prisma } from "server/db"
const handler = async (req,res) => {
    const post = await prisma.user.findMany();

    return res.status(201).json({
        hello : 'mom'
    })
}

export default handler