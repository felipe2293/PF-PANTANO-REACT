import React, { useContext, useState } from 'react'
import './ItemDetail.css'
import { CartContext } from '../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
export const ItemDetail = ({ id, description, price, brand, resume, stock, image }) => {

  const { addToCart } = useContext(CartContext)
  const [contador, setContador] = useState(0)

  const SumarCarrito = () => {
    const newItem = {
      id,
      description,
      price,
      brand,
      resume,
      contador,
      stock,
      image
    }
    addToCart(newItem)

  }
  return (
    <div>
      <div className='producto text-center'>
        <img className='img__item' src={image} alt={image} />
        <p><b>{description} - {brand}</b></p>
        <p>{resume}</p>
        <p><i> <b>USD {price}</b> </i></p>
        <ItemCount max_prod={stock} modificador={setContador} cantidad={contador} />
        <button onClick={SumarCarrito} className='boton btn btn-primary' >Agregar al carrito</button>
        <Link to='/carrito' className='boton btn btn-primary'>Ir a Carrito</Link>
      </div>
    </div>
  )
}
