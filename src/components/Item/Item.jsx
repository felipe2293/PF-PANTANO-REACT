import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
export const Item = ({ id, description, price, brand, image }) => {
  return (
    <div>

      <div className='producto text-center'>
        <img className='img__item' src={image} alt={image} />
        <p><b>Marca: {brand}</b></p>
        <p>Nombre: {description}</p>
        <p>Precio USD {price} </p>
        <Link to={`/detalle/${id}`}>
          <button className='boton btn btn-primary'>Detalles</button>
        </Link>
      </div>

    </div>


  )
}