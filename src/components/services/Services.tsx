import worker from '../../images/icons/worker.png'
import energy from '../../images/icons/energy_transition.png'
import facilities from '../../images/icons/facilities.png'
import training from '../../images/icons/training.png'

import "./services.css"

const Services = () => {
  return (
    <section className="services">
      <div className="content">

        <div>
          <img src={worker} alt="" />
          <span>
            CONSULTORIA, INSPEÇÃO E PROJETOS
          </span>
        </div>

        <div>
          <span>
            ENERGIA
          </span>
        </div>
        
        <div>
          <span>
            INSTALAÇÃO, MANUTENÇÃO E FACILITIES
          </span>
        </div>
          
      </div>
    </section>
  )
}

export default Services