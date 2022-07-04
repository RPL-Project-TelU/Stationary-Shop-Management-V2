import React from 'react'

const Purchase = (props) => {
  const total_bill_amount = props.data.quantity_product * props.data.price;
  return (
    <div className="card-purchase">
        <div className="img-tumb">
            <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
        </div>
        <div className="content">
            <p className="product-name">Nama Produk : {props.data.product_name}</p>
            <p className="quantity-product"> Jumlah Produk : {props.data.quantity_product}</p>
            <p className="price">Harga : {props.data.price}</p>
            <p className="vendor-name"> Nama Vendor : {props.data.vendor_name}</p>
            <p className="total"> Jumlah Pembelian : {total_bill_amount}</p>
            <button className="update" onClick={() => props.update(props.data)}>Update</button>
            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
  )
}

export default Purchase;