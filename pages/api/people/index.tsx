// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

// type Data = {
//     name: string,
//     avatar: string,
//     id: string
// }

// export default async function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
//     const resolve = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
//     const data: Data[]= await resolve.json()

//     res.status(200).json(data)
// }
export const people: People[] = [ 
  {
  name: "Jade",
  avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/690.jpg",
  id: "1"
},
{
  name: "Imani",
  avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/576.jpg",
  id: "3"
}
]

export type People = {
  name: string,
  avatar: string,
  id: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<People[]|any>) {
  // const resolve = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
  // const data: Data[]= await resolve.json()

  if(req.method === "POST"){
    res.status(200).send(req.body)
  }
  else res.status(200).json(people)
}
