// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    name: string,
    avatar: string,
    id: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
    const resolve = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
    const data: Data[]= await resolve.json()

    res.status(200).json(data)
}
