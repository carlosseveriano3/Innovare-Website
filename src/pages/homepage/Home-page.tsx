import Header from "../../components/header/Header"
import Banner from "../../components/banner-top-homepage/Banner-top-homepage"

import './home-page.css'

function Homepage() {

  return (
    <>
      <Header />
      <main className="homepage">
        <Banner />
      </main>
    </>
  )
}

export default Homepage
