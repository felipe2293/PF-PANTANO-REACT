import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { getfirestore } from '../../firebase/config'
import firebase from "firebase"
import 'firebase/firestore'
import Swal from 'sweetalert2'
import './checkout.css'
export const Checkout = () => {
  const { carrito, TotalPrecio, finalizarCompra } = useContext(CartContext)
  const [email, setEmail] = useState("")
  const [nombre, setNombre] = useState("")
  const [apellido, setApellido] = useState("")
  const [telefono, setTelefono] = useState("")

  const handleSubmit = (e) => {

    e.preventDefault()

    const orden = {
      buyer: {
        email,
        nombre,
        apellido,
        telefono
      },
      item: carrito,
      total_price: TotalPrecio(),
      data: firebase.firestore.Timestamp.fromDate(new Date())
    }

    const db = getfirestore()

    const ordenes = db.collection('ordenes')

    ordenes.add(orden)
      .then((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Compra Realizada',
          text: `Numero de compra: ${res.id}`,
          willClose: () => {
            finalizarCompra()
          }
        })
      })
      .finally(() => {
        console.log('Ok')
      })

  }


  return (


    <div className='menu_check'>

      <h3><b>Terminar compra</b> </h3>
      <hr />

      <form onSubmit={handleSubmit} className='container mt-3'>

        <div className="form-group">
          <label htmlFor="email"><b>Email</b></label>
          <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="form-group">
          <label htmlFor="nombre"><b>Nombre</b></label>
          <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre} />
        </div>
        <div className="form-group">
          <label htmlFor="apellido"><b>Apellido</b></label>
          <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido} />
        </div>
        <div className="form-group">
          <label htmlFor="telefono"><b>Teléfono</b></label>
          <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono} />
        </div>
        <div className='finalizar_compra'>
          <button type='submit' className='btn btn-success finalizar_compra_boton'>Finalizar compra</button>
          <Link to='/carrito' className='btn btn-secondary finalizar_compra_boton'>Volver al carrito</Link>
        </div>

      </form>


    </div>
  )
}
