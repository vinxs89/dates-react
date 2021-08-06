import { Link } from "react-router-dom";
import "./NavLink.css";

interface NavLinkProps {
    path: string,
    name: string
}

export const NavLink = ({path, name}: NavLinkProps) => {
    return (
        <div className="nav-link">
            <Link to={path} className="nav__link">
                {name}
            </Link>
        </div>
    );
}