import React, { useState } from "react";
import Logo from '../assets/stationaryShopLogo.png';
import { Link } from "react-router-dom";
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/components/Navbar.css';
import {useNavigate} from 'react-router-dom';



function Navbar() {
    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };
    return (
        <div className="navbar">
            <div className="leftSide text-white text-center d-flex" id={openLinks ? "open" : "close"}>
            <img src={Logo} /><div>STATIONARY SHOP | Young Pride Revolution</div>
                <div className="hiddenLinks">
                <Link to="/Home">Home</Link>
                <Link to="/DamageEntry">Damage</Link>
                <Link to="/Calculator">Calculator</Link>
                <Link to="/PurchaseEntry">Purchase</Link>
                <Link to="/DamageEntry">Purchase</Link>
                <Link to="/SalesEntry">Sales</Link>
                <Link to="/SetupAndViewProduct">SetupAndView</Link>
                </div>
            </div>
            <div className="rightSide">
                <Link to="/Home">Home</Link>
                <Link to="/DamageEntry">Damage</Link>
                <Link to="/Calculator">Calculator</Link>
                <Link to="/PurchaseEntry">Purchase</Link>
                <Link to="/SalesEntry">Sales</Link>
                <Link to="/SetupAndViewProduct">SetupAndView</Link>
                <button onClick={toggleNavbar}>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
