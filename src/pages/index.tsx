import type { NextPage } from 'next'
import Head from 'next/head'

import { DefaultLayout } from '../Layout'
import { BlogSection } from '../sections/Blog'
import { HomeSection } from '../sections/Home'
import { Membership } from '../sections/Membership'
import { RecipesSection } from '../sections/Recipes'
import { ServicesSection } from '../sections/Services'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Healthy Food | Home</title>
      </Head>

      <DefaultLayout>
        <HomeSection />
        <RecipesSection />
        <ServicesSection />
        <BlogSection />
        <Membership />
      </DefaultLayout>
    </>
  )
}

export default Home