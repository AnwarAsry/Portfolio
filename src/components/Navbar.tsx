import { NavLink } from "react-router-dom"

const routes = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "About", path: "/about" },
]

export const Navbar = () => {
    return (
        <nav className="w-fit">
            <ul className="p-2 flex gap-3 rounded-xl font-bold text-navtextColor bg-navbg">
                {
                    routes.map(route => (
                        <NavLink to={route.path}
                            key={route.name}
                            className={({ isActive }) =>
                                [
                                    isActive ? "rounded-lg text-activeRoute bg-activeRoutebg" : "",
                                ].join(" ")
                            }
                        >
                            <li className="px-3 py-1 flex items-center justify-center">{route.name}</li>
                        </NavLink>
                    ))
                }
            </ul>
        </nav>
    )
}