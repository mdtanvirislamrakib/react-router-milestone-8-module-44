import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navigationData = [
    {
        "id": 1,
        "name": "Home",
        "path": "/"
    },
    {
        "id": 2,
        "name": "About",
        "path": "/about"
    },
    {
        "id": 3,
        "name": "Services",
        "path": "/services"
    },
    {
        "id": 4,
        "name": "Portfolio",
        "path": "/portfolio"
    },
    {
        "id": 5,
        "name": "Contact",
        "path": "/contact"
    }
]


const Navbar = () => {
    const [open, setOpen] = useState(false)

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)
    return (
        <nav className='flex justify-between items-center mx-6 mt-5'>
            <span className='flex' onClick={() => setOpen(!open)}>
                {open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                <ul className={`md:hidden absolute bg-zinc-800 ${open ? 'top-10' : '-top-40'}  duration-1000`}>
                    {links}
                </ul>          
                <h3>My navbar</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links  

                }
            </ul>
            <button>Sign In</button>
        </nav>
    );
};

export default Navbar;