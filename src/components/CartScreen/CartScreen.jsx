import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from "react-router-dom";
import "./CartScreen.css"
export const CartScreen = () => {

  const { carrito, TotalPrecio, removerItem, vaciarCarrito } = useContext(CartContext)
  return (
    <div>
      {
        carrito.length == 0
          ? <div className='menu'>
            <h3>
              Carrito Vacio
            </h3>
            <hr />
            <Link to='/' className='volver'>Volver al inicio</Link>
          </div>
          : <div className='menu2'>
            <h3>Resumen de compras</h3>
            <hr />
            {
              carrito.map((prod) => (
                <div>
                  <hr />
                  <div>
                    <img className='imagen_prod' src={prod.image} alt={prod.image} />
                    <p><b>Producto:</b> {prod.description}</p>
                    <p><b>Precio:</b> USD {prod.price}</p>
                    <p><b>Cantidad:</b> {prod.contador}</p>
                    <>
                      <button className='boton_remover' onClick={() => removerItem(prod.id)}>Remover</button>

                    </>
                  </div>

                </div>
              ))

            }
            <div>
              <hr />
              <strong>Precio Total: ${TotalPrecio()}</strong>
              <hr />
              <button className='btn boton_vaciar' onClick={vaciarCarrito}>Vaciar Carrito</button>
              <Link className='btn boton_terminar' to='/checkout'>Terminar compra</Link>
            </div>


          </div>

      }


    </div>

  )
}
