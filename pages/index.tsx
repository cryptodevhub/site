import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" description="Lorem ipsum dolor sit amet." />
      <section>
        <h1>Placeholder</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </>
  )
}

export default Home
