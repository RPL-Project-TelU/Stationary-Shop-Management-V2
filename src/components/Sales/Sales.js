import React from 'react'

const Sales = (props) => {
  const change_amount = props.data.payment - props.data.price;
  return (
    <div className='card'>
        <div className="img-tumb">
            <img src="https://placeimg.com/200/150/tech" alt="dummy"/>
        </div>
        <div className="content">
            <p className="purchase"> Pembelian : {props.data.purchase}</p>
            <p className="price"> Harga : {props.data.price}</p>
            <p className="payment">Pembayaran : {props.data.payment}</p>
            <p className="change-amount"> Jumlah Kembalian : {change_amount}</p>
            <button className="update" onClick={() => props.update(props.data)}>Update</button>
            <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
        </div>
    </div>
  )
}

export default Sales;