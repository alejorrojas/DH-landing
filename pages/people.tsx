import React from 'react'
import { InferGetServerSidePropsType } from 'next'
import Image from 'next/image'


export type Data = {
    name: string,
    avatar: string,
    id: string
}


type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/people")
    const data: Data[]= await res.json()

    return { 
        props: { data }
    }
  }

const People = ({data}: Props) => {
  return (
    <section>
        {data?.map(d => {
           
            return <div key={d.id} >
                <h2>{d.name}</h2>
                <Image className='avatar' src={d.avatar} alt="avatar" width={200} height={200} />
            </div>
        })}
    </section>
  )
}

export default People