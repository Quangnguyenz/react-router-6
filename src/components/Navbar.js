import { Link } from 'react-router-dom'

import React from 'react'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products">Products</Link>
        </nav>
    )
}

export default Navbar;