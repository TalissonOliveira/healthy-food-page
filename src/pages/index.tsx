import type { NextPage } from 'next'
import Head from 'next/head'

import { DefaultLayout } from '../Layout'
import { HomeSection } from '../sections/Home'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Food | Home</title>
      </Head>

      <DefaultLayout>
        <HomeSection />
      </DefaultLayout>
    </>
  )
}

export default Home