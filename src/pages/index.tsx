import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Seat from '@/components/Seat';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seat/>
      <Seat isReserved={true}/>
      <Seat/>
      <Seat/>
    </div>
  )
}

export default Home
