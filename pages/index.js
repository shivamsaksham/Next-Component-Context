import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import BaseContext from '../Context/ContextCreator'
import styles from '../styles/Home.module.css'

export default function Home() {
  const context = useContext(BaseContext);
  const {title} = context;
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      
    </div>
  )
}
