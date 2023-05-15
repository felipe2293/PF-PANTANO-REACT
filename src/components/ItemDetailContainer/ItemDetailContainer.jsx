import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { getfirestore } from '../../firebase/config';
import './ItemDetailContainer.css';
export const ItemDetailContainer = (props) => {
    const { mensaje } = props;
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true)
        const db = getfirestore()
        const productos = db.collection('productos')
        const Item = productos.doc(itemId)
        Item.get()
            .then((doc) => {
                setItem({
                    id: doc.id, ...doc.data()
                })


            })


            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)

            })

    }, [itemId])
    return (
        <section>
            {
                loading
                    ? <h1 className='mensaje'>{mensaje}</h1>
                    : <ItemDetail{...item} />

            }

        </section>

    )
}
