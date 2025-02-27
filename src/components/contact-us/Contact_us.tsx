import wapp from "../../images/icons/wapp.png"

import "./contact_us.css"

const Contact_us = () => {
  return (
    <section className="contact-us">
      <div className="gradient-background">
        <div className="content">
          <span>
            Solicite seu orçamento através do nosso Whatsapp:
          </span>
          <div className="wpp">
            <img src={wapp} alt="Whatsapp" />
            <span>(XX) XXXXX-XXXX</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_us