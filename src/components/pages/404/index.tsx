
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/index.css'

const NotFoundPages = () => (
    <section className="p-404">
        <div className="p404__container">
            <div className="p404_column">
                <span>404 not found</span>
                <Link to="/">Back to home</Link>
            </div>
        </div>
    </section>
)

export default NotFoundPages