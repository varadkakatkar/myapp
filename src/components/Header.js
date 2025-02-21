import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.svg"  height="50" width="100px"/>
            </div>
            <div className="nav-items">
            <ul >
                <Link className="link" to="/">
                    <li >
                    Home
                </li>
                </Link>
                <Link className="link" to="/about">
                <li >
                    About us
                </li>
                </Link>
                <Link className="link" to="/contact">
                <li >
                    Contact us
                </li>
                </Link>
            </ul>
            </div>
        </div>
    )
}

export default Header;