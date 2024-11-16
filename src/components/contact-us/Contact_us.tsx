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
            <span>(85) 98788-7078</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact_us