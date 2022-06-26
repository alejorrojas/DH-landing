import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import people from "../public/people.jpg"
import contentAR from "../locales/ar" 
import contentBR from "../locales/br"
import { useContext } from 'react'
import { Language } from './_app'
import { InferGetServerSidePropsType } from 'next'


export type Data = {
    name: string,
    avatar: string,
    id: string
}


type Props = InferGetServerSidePropsType<typeof getServerSideProps>

export const getServerSideProps = async () => {
    const res = await fetch("https://62b3a9264f851f87f45dfb80.mockapi.io/api/example/data")
    const data: Data[]= await res.json()

    return { 
        props: { data }
    }
  }

const Landing = ({data}: Props) => {
  const locale = useContext(Language)
  const content = locale === "es" ? contentAR : contentBR

  return (
    <div className='landing'>
      <Head>
        <title>Digital House</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={content.description} />
        <link rel="shortcut icon" href="/logo.png" />
      </Head>
      <main>
        <div>
        <h1 >{content.title}</h1>
        <h2>{content.subtitle}</h2>
        <button>{content.buttonText}</button>
        </div>
        <Image src={people} alt="people" width={700} height={700} />
      </main>
      <section>
        {data?.map(d => {
           
            return <div key={d.id} >
                <h2>{d.name}</h2>
                <Image className='avatar' src={d.avatar} alt="avatar" width={200} height={200} />
            </div>
        })}
      </section>
    </div>
  )
}

export default Landing




