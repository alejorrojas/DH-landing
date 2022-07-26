// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Cors from 'cors'

// Initializing the cors middleware
// You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
const cors = Cors({
  methods: ['POST', 'GET'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}



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

export default async function handler(req: NextApiRequest, res: NextApiResponse<People[]|any>) {
    // const resolve = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
    // const data: Data[]= await resolve.json()

    if(req.method === "POST"){
      await runMiddleware(req, res, cors)
      res.status(200).send(req.body)
    }
    else res.status(200).json(people)
}
