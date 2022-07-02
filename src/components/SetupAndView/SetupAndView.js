import React from 'react'

const SetupAndView = (props) => {
  return (
    <div className='card'>
        <div className="img-tumb">
            <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
        </div>
        <div className="content">
            <p className="code-product">Kode Produk : {props.data.code_product}</p>
            <p className="product-name"> Nama Produk: {props.data.product_name}</p>
            <p className="vendor-name"> Nama Vendor : {props.data.vendor_name}</p>
            <p className="quantity-product"> Jumlah Produk : {props.data.quantity_product}</p>
            <p className="price">Harga : {props.data.price}</p>
            <button className="update" onClick={() => props.update(props.data)}>Update</button>
            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
  )
}

export default SetupAndView;