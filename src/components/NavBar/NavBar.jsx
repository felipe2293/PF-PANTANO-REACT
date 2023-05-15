import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from '../CartWidget/CartWidget'
import './navbar.css'
import { CartScreen } from '../CartScreen/CartScreen'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link className="marca" to='/'>PANTAUTOMATION shop</Link>
        <Link className='link' to='/'>Inicio</Link>
        <div class="dropdown">
          <button class="link" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </button>
          <ul class="dropdown-menu link" aria-labelledby="dropdownMenu2">
            <Link className='link dropdown-item' to='/productos/Controlador'>Controladores</Link>
            <Link className='link dropdown-item' to='/productos/Enlace'>Equipos de Comunicacion</Link>
          </ul>
        </div>

        <div>

          <Link className='link' to='/carrito'>
            <CartWidget />
            <img src="../../../../carro.png" alt="" width="30" height="24" class="d-inline-block align-text-top"></img>
          </Link>

        </div>

      </div>
    </nav>



  )
}
