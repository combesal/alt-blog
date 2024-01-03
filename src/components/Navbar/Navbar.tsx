import { NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {

    return (
        <>

            <nav>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}
                >
                    Accueil
                </NavLink>

                <NavLink
                    to="/blog"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}
                >
                    Blog
                </NavLink>

                <NavLink
                    to="/add-article"
                    className={({ isActive }) => (isActive ? "activeLink" : undefined)}
                >
                    Ajouter un Article
                </NavLink>

            </nav>

        </>
    )
}