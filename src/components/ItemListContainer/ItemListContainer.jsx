import React, { useEffect, useState } from 'react';
import { getfirestore } from '../../firebase/config';
import { ItemList } from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) => {
  const { saludo } = props;
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(false)
  const { categoryType } = useParams()

  useEffect(() => {

    setLoading(true)
    const db = getfirestore();
    const productos = categoryType
      ? db.collection('productos').where('tipo', '==', categoryType)
      : db.collection('productos')
    productos.get()
      .then((res) => {
        const newItem = res.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setItems(newItem);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });

  }, [categoryType, setLoading])

  return (
    <div>
      <>
        {
          loading
            ? <div>
              <h1 className='saludo'>{saludo}</h1>
              <div className='logo'>
                <img className='imagen' src="../../../../logo.png" alt="centered image" />
              </div>
            </div>

            : <ItemList productos={items} />
        }
      </>

    </div>
  )
}
