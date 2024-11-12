import Header from "../../components/header/Header"
import Banner from "../../components/banner-top-homepage/Banner-top-homepage"
import Services from "../../components/services/Services"
import Our_mission_banner from "../../components/our_mission_banner/Our_mission_banner"

import './home-page.css'
import Partners from "../../components/partners/Partners"

const Homepage = () => {

  return (
    <>
      <Header />
      <main className="homepage">
        <Banner />
        <Services />
        <Our_mission_banner />
        <Partners />
      </main>
    </>
  )
}

export default Homepage
