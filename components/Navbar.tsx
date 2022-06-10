import Image from 'next/image'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import logo from "../public/logo.png"
import styles from "./navbar.module.css"
import contentBR from "../locales/br"
import contentAR from "../locales/ar" 
import { Language } from '../pages/_app'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const locale = useContext(Language)
  const content = locale === "es" ? contentAR : contentBR
  return (
    <nav className={styles.nav}>
        <div className={styles.header} >
          <div  className={styles.logo}>
            <Link href="/">
              <Image src={logo} alt="logo" />
            </Link>
          </div>
          <button onClick={()=>setOpen(!open)} className={styles.toggle} >X</button>
        </div>
        <div className={open ? styles.activeLinks : styles.links}>
            <Link href="/">{content.home}</Link>        
            <Link href="/about">{content.about}</Link>        
            <Link href="/contact">{content.contact}</Link>        
        </div>
    </nav>
  )
}

export default Navbar