import hesq from '../images/logo/hesq-logo.png'

export default function Header() {
  return (
    <nav>
      <div className='header-container'>
      </div>

      <div className='header-secondary-container'>
        <div className='header-content'>
          <img src={hesq} alt="logo" className='header-logo'/>
          <div className='nav-content'>
            <span>PRINCIPAL</span>
            <span>SOBRE</span>
            <span>SOLUÇÕES</span>
            <span>CLIENTES</span>
            <span>CONTATO</span>
          </div>
        </div>
      </div>

    </nav>
  )
}