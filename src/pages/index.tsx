import type { NextPage } from 'next'
import Head from 'next/head'

import { DefaultLayout } from '../Layout'
import { HomeSection } from '../sections/Home'
import { RecipesSection } from '../sections/Recipes'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Food | Home</title>
      </Head>

      <DefaultLayout>
        <HomeSection />
        <RecipesSection />
      </DefaultLayout>
    </>
  )
}

export default Home