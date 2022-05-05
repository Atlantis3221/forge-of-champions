import { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Home: NextPage = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Layout>
      </Layout>
    </>
  )
}

export default Home
