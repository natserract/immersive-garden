
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'


const Header: React.SFC = () => {
    return (
        <header className="c-header">
            <div className="c-menu">
                <Link to="/about">About Us</Link>
            </div>
        </header>
    )
}


export default Header