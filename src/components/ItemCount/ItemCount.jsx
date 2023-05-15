import React from 'react'
import './ItemCount.css'
export const ItemCount = ({ max_prod, modificador, cantidad }) => {
    const sumar = () => {
        if (cantidad < max_prod) {
            modificador(cantidad + 1)
        }
    }
    const restar = () => {
        if (cantidad > 0) {
            modificador(cantidad - 1)
        }
    }
    return (
        <div>
            <div>
                <p>Agregar: {cantidad}</p>
            </div>
            <div>
                <button className='boton' onClick={sumar}>+</button>
                <button className='boton' onClick={restar}>-</button>
            </div>

        </div>
    )
}
