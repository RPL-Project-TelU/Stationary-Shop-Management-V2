import React from 'react'

const Damage = (props) => {
  const total_product= props.data.quantity_product - props.data.damaged_product;
  return (
    <div className="card-damage">
        <div className="img-tumb">
            <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
        </div>
        <div className="content">
            <p className="product-name">Nama Barang : {props.data.product_name}</p>
            <p className="quantity-product">Jumlah Barang : {props.data.quantity_product}</p>
            <p className="damaged-product"> Barang Rusak : {props.data.damaged_product}</p>
            <p className="normal-product">Barang Normal : {total_product}</p>
            <button className="update" onClick={() => props.update(props.data)}>Update</button>
            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
  )
}

export default Damage;