// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

 export const people: People[] = [ 
    {
    name: "Jade",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg",
    quote: "Accusantium recusandae maiores nesciunt est rerum porro. Mollitia provident placeat. Deleniti voluptatem ipsam ut dolores quia. Nam veritatis aut vel. Earum rem consequatur nobis perspiciatis. Soluta excepturi distinctio.",
    id: "1"
  },
  {
    name: "Imani",
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/576.jpg",
    quote: "Placeat numquam totam rerum et. Sequi veritatis voluptatem deleniti beatae. Eum tempora velit et soluta in. Laboriosam suscipit necessitatibus ad vitae officia rerum quia voluptas quidem.",
    id: "3"
  }
]

export type People = {
    name: string,
    avatar: string,
    id: string,
    quote: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<People[]>) {
    // const resolve = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
    // const data: Data[]= await resolve.json()
    console.log("aqui 2");
    res.status(200).json(people)
}
