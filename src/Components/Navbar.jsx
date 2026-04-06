import {Link} from
"react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <div>
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/education">Education</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/weather">Weather</Link>
            </div>
        </nav>
    );
}
export default Navbar;