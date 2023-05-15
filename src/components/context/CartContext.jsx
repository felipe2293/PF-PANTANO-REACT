import { createContext, useEffect } from "react";
import { useState } from 'react';
import Swal from "sweetalert2";
export const CartContext = createContext()
const init = JSON.parse(localStorage.getItem('carrito')) || []

export const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(init)

    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito))
    }, [carrito])

    const addToCart = (item) => {
        setCarrito([...carrito, item])
    }
    const calcularCantidad = () => {
        return carrito.reduce((acc, prod) => acc + prod.contador, 0)
    }
    const TotalPrecio = () => {
        return carrito.reduce((acc, prod) => acc + prod.price * prod.contador, 0)
    }
    const removerItem = (itemId) => {
        Swal.fire({
            title: 'Esta seguro de remover el producto?',
            showDenyButton: true,
            confirmButtonText: 'SI',
            denyButtonText: `NO`,
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('Removido', '', 'success')
                const newCart = carrito.filter((prod) => prod.id !== itemId)
                setCarrito(newCart)
            } else if (result.isDenied) {

            }

        })

    }
    const vaciarCarrito = () => {
        Swal.fire({
            title: 'Esta seguro de vaciar el carrito?',
            showDenyButton: true,
            confirmButtonText: 'SI',
            denyButtonText: `NO`,
        }).then((result) => {

            if (result.isConfirmed) {
                Swal.fire('Carrito vacio', '', 'success')
                setCarrito([])
            } else if (result.isDenied) {

            }

        })

    }
    const finalizarCompra = () => {
        setCarrito([])
    }
    return (
        <CartContext.Provider value={{
            addToCart,
            calcularCantidad,
            TotalPrecio,
            removerItem,
            carrito,
            vaciarCarrito,
            finalizarCompra
        }}>
            {children}
        </CartContext.Provider>
    )
}
