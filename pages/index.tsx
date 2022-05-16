import { NextPage } from 'next'
import Layout from '../components/layout/layout'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import ImproveSwiper from '../components/improveSwiper';
import Team from '../components/team';
import Marketplace from '../components/marketplace';
import Land from '../components/land';
import Intro from '../components/introVideo';
import ChooseYourArena from '../components/chooseYourArena';

const Home: NextPage = () => {

  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Layout>
        <Intro />
        <ChooseYourArena />
        <Land />
        <ImproveSwiper />
        <Marketplace />
        <Team />
      </Layout>
    </>
  )
}

export default Home
