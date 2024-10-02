import Header from "../../components/header/Header"
import Banner from "../../components/banner-top-homepage/Banner-top-homepage"

import './home-page.css'
import Services from "../../components/services/Services"

function Homepage() {

  return (
    <>
      <Header />
      <main className="homepage">
        <Banner />
        <Services />
      </main>
    </>
  )
}

export default Homepage
