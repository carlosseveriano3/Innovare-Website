import brand1 from '../../images/partners-logo/engeman.png'
import brand2 from '../../images/partners-logo/engeteles.png'
import brand3 from '../../images/partners-logo/senai.png'

import "./partners.css"

const Partners = () => {
  return (
    <section className="partners">
      <div className='content'>
        <span className="title">Conheça alguns de nossos parceiros</span>
        <div className='images'>
          <img src={brand1} alt="engeman" />
          <img src={brand2} alt="engeteles" />
          <img src={brand3} alt="senai" />
        </div>
      </div>
    </section>
  )
}

export default Partners