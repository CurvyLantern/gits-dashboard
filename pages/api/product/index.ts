
// import { NextApiRequest, NextApiResponse } from 'next'

import { PrismaClient } from "@prisma/client"


// import { prisma } from 'server/db'
const prisma = new PrismaClient()

export interface Product {
    name: string,
    unit?:string,
    weight?:number,
    minimum_purchase_qty:number,
    tags: string,
    barcode: string,
    refundable : boolean,
    thumbnail_url: string,
    video_url: string,
    price: string,
    discount: string,
    qty: number,
    description: string,
    seo_tags: string,
}


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const productData = req.body as Product

    const post = await prisma.user.create({
        data: {
            
        }
    })  

  try {
    return res.status(201).json()
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: 'Something went wrong' })
  }
}
