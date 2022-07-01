import React from 'react'
import BannerImage2 from '../assets/shop.jpg';

import '../styles/Features/SaleEntry.css'
import '../styles/Features/DamageEntry.css'

import '../styles/Features/purchaseEntry.css'
import '../styles/Features/setup.css'

import '../styles/Features/View.css'
import '../styles/Features/Calculator.css'


function Menu() {
  return (
    <div className='Menu'>
    {/* Sale Entry */}
        <h1 className='Sale-Container'style={{ backgroundImage: `url(${BannerImage2})` }}>
          <h1>Sale Entry</h1>
        </h1>
    {/* Damage Entry */}
        <h1 className='Damage-Container'style={{ backgroundImage: `url(${BannerImage2})` }}>
          <h1>Damage Entry</h1>
        </h1>   
    {/* Purchase Entry */}
        <h1 className='Purchase-Container'style={{ backgroundImage: `url(${BannerImage2})` }}>
          <h1>Purchase Entry</h1>
        </h1>
    {/* Setup Product and View Stock */}
    <h1 className='Setup-Container'style={{ backgroundImage: `url(${BannerImage2})` }}>
          <h1>Setup Product and View Stock</h1>
    </h1> 
    {/* View */}
    <h1 className='View-Container'style={{ backgroundImage: `url(${BannerImage2})` }}>
          <h1>View (Sale/Purchase/Damage)</h1>
    </h1>        
    </div>
  )
}

export default Menu