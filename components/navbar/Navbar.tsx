import { HomeIcon } from "@primer/octicons-react"
import Link from "next/link"
import path from "path"

const navItems = [
    {path: "/", label: "Home"},
    {path: "/about", label: "About"},
    {path: "/pricing", label: "Pricing"},
    {path: "/contact", label: "Contact"}
]


export const Navbar = () => {

    return (
        <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">

            <Link href={"/"} className='flex items-center'>
            <HomeIcon className='mr-2'/>
            <span>Home</span>
            </Link>

            <div className="flex flex-1"></div>

            {navItems.map((navItem) => (
                <Link key={navItem.path} className="mr-2" href={navItem.path}>
                    {navItem.text}
                </Link>
            ))}

            < Link href="/about" className="mr-2">About</Link>
            < Link href="/pricing" className="mr-2">Pricing</Link>
            < Link href="/contact" className="mr-2">Contact</Link>


        </nav>
    )
}