import React from 'react'
import { Link } from 'react-router-dom';
// TODO: Make react-bootstrap for Nav Bar

function NavBar() {
    return (
        <div>
            <nav>
                <Link to ='/'>Home</Link>
                <Link to ='/Detailed'>Detailed</Link>
                <Link to ='/Favorites'>Favorites</Link>

            </nav>
        </div>
    )
}

export default NavBar
