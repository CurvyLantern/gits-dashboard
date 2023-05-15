
// import { NextApiRequest, NextApiResponse } from 'next'


import { prisma } from 'server/db'
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const { title, role } = req.body as {
    title : string,
    role: string
  }

  try {
    const post = await prisma.example.create({
      data : {
        role,
        title
      }
    })
    return res.status(201).json(post)
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
