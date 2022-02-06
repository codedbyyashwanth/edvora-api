import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Dropdown  from '../components/Dropdown'
import CardItems from '../components/CardItems'

export default function Home() {
  return ( 
    <div>
      <Head>
        <title>Edvora API - Dashboard</title>
      </Head>
      <body>
        <div className={styles.container}>
          <Dropdown />
          <CardItems />
        </div>
      </body>
    </div>
  )
}
