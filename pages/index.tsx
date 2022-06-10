import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import people from "../public/people.jpg"
import contentAR from "../locales/ar" 
import contentBR from "../locales/br"
import { useContext } from 'react'
import { Language } from './_app'

const Landing: NextPage = () => {
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
      <div>
       <h1>{content.title}</h1>
       <h2>{content.subtitle}</h2>
       <button>{content.buttonText}</button>
      </div>
     <Image src={people} alt="people" width={700} height={700} />
    </div>
  )
}

export default Landing
