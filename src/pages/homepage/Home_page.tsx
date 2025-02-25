import Header from "../../components/header/Header"
import Banner from "../../components/banner_top_homepage/Banner_top_homepage"
import Services from "../../components/services/Services"
// import Our_mission_banner from "../../components/our_mission_banner/Our_mission_banner"
import Partners from "../../components/partners/Partners"
import Contact_us from "../../components/contact-us/Contact_us"
import Footer from "../../components/footer/Footer"

const Homepage = () => {

  return (
    <>
      <Header />
      <Banner />
      <Services />
      {/* <Our_mission_banner /> */}
      <Partners />
      <Contact_us />
      <Footer />
    </>
  )
}

export default Homepage
