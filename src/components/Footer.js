import React from 'react'
import InstagramIcon from "@mui/icons-material/Instagram"
import TwitterIcon from  "@mui/icons-material/Twitter"
import { GitHub } from '@mui/icons-material'
import '../styles/components/Footer.css'

function Footer () {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon/> <TwitterIcon/> <GitHub/>
      </div>
      <p> &copy; stationaryShop.com | Young-Pride-Revolution-Team </p>
      {/* <p> &copy; Created by : </p>
      <p> &copy; 01. Jeremia Carlo Christianto Silitonga </p> 
      <p> &copy; 02. Ahmad Naufal Diwantara Putra </p>
      <p> &copy; 03. Akbar Sirajuddin Hanif </p>
      <p> &copy; 04. Afif Fajar Rayhan </p>
      <p> &copy; 05. Hilmi Fadhillah Cahyadi </p>
      <p> &copy; 06. Tasyrika Nurul Hajar </p> */}
    </div>
  )
}  
export default Footer;