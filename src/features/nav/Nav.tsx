import { NavLink } from "./NavLink";
import './Nav.css';

export const Nav = () => {
    return (
        <nav className="nav">
            <NavLink path="/cards" name="C" />
            <NavLink path="/likes" name="L" />
            <NavLink path="/chat" name="M" />
            <NavLink path="/profile" name="P" />
        </nav>
    );
}