import { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ImproveSwiper from '../components/improveSwiper/improveSwiper';
import Team from '../components/team';
import Marketplace from '../components/marketPlace';

const Home: NextPage = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Layout>
        <ImproveSwiper />
        <Marketplace/>
        <Team/>
      </Layout>
    </>
  )
}

export default Home
