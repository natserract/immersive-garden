
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

interface Props  {
    to: string,
    menuName: string
    src?: string,
}

const Header = ({ to, menuName }: Props) => {
    return (
        <header className="c-header">
            <div className="c-menu">
                <Link to={`/${to}`}>{menuName}</Link>
            </div>
        </header>
    )
}


export default Header