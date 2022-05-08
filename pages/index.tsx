import { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ImproveSwiper from '../components/improveSwiper/improveSwiper';

const Home: NextPage = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Layout>
        <ImproveSwiper />
      </Layout>
    </>
  )
}

export default Home
