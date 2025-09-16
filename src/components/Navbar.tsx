import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="w-fit">
            <ul className="p-2 flex gap-6 rounded-xl font-bold text-[#817e84] bg-[#262729]">
                <NavLink to="/"
                    className={({ isActive }) =>
                        [
                            isActive ? "rounded-lg text-[#f2f3f2] bg-[#3f3e45]" : "",
                        ].join(" ")
                    }
                ><li className="px-2 py-2 ">Home</li></NavLink>
                <NavLink to="/projects"
                    className={({ isActive }) =>
                        [
                            isActive ? "rounded-lg text-[#f2f3f2] bg-[#3f3e45]" : "",
                        ].join(" ")
                    }
                ><li className="px-2 py-2">Projects</li></NavLink>
                <NavLink to="/contact"
                    className={({ isActive }) =>
                        [
                            isActive ? "rounded-lg text-[#f2f3f2] bg-[#3f3e45]" : "",
                        ].join(" ")
                    }
                ><li className="px-2 py-2">Contact</li></NavLink>
            </ul>
        </nav>
    )
}