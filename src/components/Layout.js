import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { useLocation} from 'react-router-dom'
import NavbarDark from "./NavbarDark";

export default function Layout() {
    const location = useLocation();
    
    return (
        <>
            {location.pathname === '/' ? <Navbar /> : <NavbarDark />}
            <Outlet />
        </>
    )
}