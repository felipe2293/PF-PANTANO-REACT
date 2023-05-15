
import React from 'react'
import { Item } from '../Item/Item'

export const ItemList = ({ productos = [] }) => {
  return (
    <div>

      <div class="d-flex justify-content-evenly flex-wrap">{productos.map((item) => <Item {...item} key={item.id} />)}</div>

    </div>
  )
}