import React from 'react'
import { InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { People, people } from './api/people';
import { useForm, SubmitHandler } from 'react-hook-form'

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
  const {register, handleSubmit} = useForm<People>()

  const submit: SubmitHandler<People> = (data)=>{
    people.push(data)
  }

  return (<>
    <form onSubmit={handleSubmit(submit)} >
      <input placeholder='Name' {...register("name")} />
      <input placeholder='id' {...register("id")} />
      <input placeholder='Avatar' {...register("avatar")} />
      <input placeholder='quote' {...register("quote")} />
    </form>
    <section>
        {data?.map(d => {
           
          return <div key={d.id} >
                <h2>{d.name}</h2>
                <Image className='avatar' src={d.avatar} alt="avatar" width={200} height={200} />
            </div>
        })}
    </section>
  </>
  )
}

export default People