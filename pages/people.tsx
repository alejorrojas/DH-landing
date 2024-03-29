import React from 'react'
import { InferGetServerSidePropsType } from 'next'
import Image from 'next/image'
import { People } from './api/people';
import { useForm, SubmitHandler } from 'react-hook-form'

export type Data = {
    name: string,
    avatar: string,
    id: string
}


type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export const getServerSideProps = async () => {
    const res = await fetch("https://dh-landing.vercel.app/api/people")
    const data: Data[]= await res.json()

    return { 
        props: { data }
    }
  }

const People = ({data}: Props) => {
  const {register, handleSubmit, reset} = useForm<People>()

  const submit: SubmitHandler<People> = async(data)=>{
    const res = await fetch("https://dh-landing.vercel.app/api/people", {
      method: "POST",
      body: JSON.stringify(data),
    })
    reset()
    if(res.status === 200){
      const data = await res.json()
      console.log(data);
    }
  }

  return (<>
    <form onSubmit={handleSubmit(submit)} >
      <input placeholder='Name' {...register("name")} />
      <input placeholder='id' {...register("id")} />
      <input placeholder='Avatar' {...register("avatar")} />
      <button type='submit'>Submit</button>
    </form>
    <section>
        {data?.map(d => {
          return <div key={d.id} >
                <h2>{d.name}</h2>
                <Image className='avatar' src={d.avatar || "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/861.jpg"} alt="avatar" width={200} height={200} />
            </div>
        })}
    </section>
  </>
  )
}

export default People