import hesq from '../images/logo/hesq-logo.png'
import { Link } from 'react-router-dom'

export default function Header() {
  const click = () => {
    
  }

  return (
    <header>
      <div className='header-container'>
      </div>

      <div className='header-secondary-container'>
        <div className='header-content'>
          <Link to={'/'}>
            <img 
              src={hesq} 
              alt="logo" 
              className='header-logo'
              onClick={click}
            />
          </Link>
          <span className='sidebar'>MENU</span>
          <nav className='nav-content'>
            <span>PRINCIPAL</span>
            <span>SOBRE</span>
            <span>SOLUÇÕES</span>
            <span>CLIENTES</span>
            <span>CONTATO</span>
          </nav>
        </div>
      </div>

    </header>
  )
}