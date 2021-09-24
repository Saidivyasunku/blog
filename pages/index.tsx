import type { NextPage } from 'next'
import Head from 'next/Head'
import Blogs from '../components/Blogs'
const Home: NextPage = () => {  
  return (
    <>
      <Head>
        <title>Blogs | Blogs.com</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="container page-wrapper">  
          <Blogs />
      </div>
    </>
  )
}
export default Home
