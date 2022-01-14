import type { NextPage } from 'next'
import Head from 'next/head'
import { Header } from '../components/Header'
import { CgSearch } from 'react-icons/cg'

import styles from './home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Food | Home</title>
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Ready for Trying a new recipe?</h1>

            <div className={styles.search}>
              <input type="text" placeholder="Search healthy recipes" />
              <button type="button">
                <CgSearch />
              </button>
            </div>
          </div>

          <img src="/images/illustration.svg" alt="Illustration" />
        </section>
      </main>
    </>
  )
}

export default Home