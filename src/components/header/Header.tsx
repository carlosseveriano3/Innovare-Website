import { Link, useParams } from 'react-router-dom'
import { useEffect, useMemo, useState } from 'react';

import logo from '../../images/logo/logo-innovareAtivo 1.png'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

import './header.css'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [isBackgroundSobreActive, setIsBackgroundSobreActive] = useState(false);
  
  const {search} = useParams()

  console.log(isBackgroundSobreActive)

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useMemo(() => {
    if (windowWidth > 730) {
      setIsOpen(false)
    }
  }, [windowWidth])

  useEffect(() => {
    if (search === 'sobre') {
      setIsBackgroundSobreActive(true)
    }
  }, [])

  return (
    <header className={isBackgroundSobreActive ? 'background-sobre' : ''}>
      <div className={isOpen ? 'dropdown-menu-container' : 'hide'}></div>
        <div className='header-content'>
          <Link to={'/'}>
            <img 
              src={logo} 
              alt="logo" 
              className='header-logo'
            />
          </Link> 
          <div className={isOpen ? 'menu-container-open' : 'menu-container'}>
            <span className='menu'>MENU</span>
            {isOpen ? (
              <button className='close-menu-icon'
                onClick={() => setIsOpen(!isOpen)}
              >
                <IoCloseSharp />
              </button>
            ) : (
            <button className='menu-icon'
              onClick={() => setIsOpen(!isOpen)}
            > 
              <IoMdMenu/> 
            </button>
            )}
          </div>
          <div className='centro-oeste'>
            CENTRO-OESTE | NORDESTE
          </div>
          
          <nav className={isOpen ? 'dropdown-menu' : 'nav-content'}>
            <Link to='/'>PRINCIPAL</Link>
            <Link to='/sobre'>SOBRE</Link>
            <Link to='/'>SERVIÇOS</Link>
            <Link to='/'>CLIENTES</Link>
            <Link to='/'>CONTATO</Link>
          </nav>
        </div>

    </header>
  )
}

export default Header