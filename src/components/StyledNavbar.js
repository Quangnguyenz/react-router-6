import { NavLink } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" style={(isActive) => isActive ? 'link active' : 'link'}
            >Home</NavLink>
            <NavLink to="/" style={(isActive) => isActive ? 'link active' : 'link'}
            >Login</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/" >Products</NavLink>
        </nav>
    )
}

export default Navbar;