import '../styles/nav.scss';
import logo from '../images/logo.png';

function Navigation (){


    return (
        <nav className="healthy-nav ">
            <div className="nav-wrapper row container-fluid">
                <div className="col-lg-2 nav-logo">
                    <img src={logo} alt="Helpfully Healthy" ></img>
                </div>
                <div className="col-lg-10 nav-list">
                    <a href="/" className="nav-item">About</a>
                    <a href="/" className="nav-item">Login</a>
                    <a href="/" className="nav-item">Sign Up</a>
                    <a href="/search" className="nav-item">Search</a>
                </div>              
            </div>


        </nav>
    )

}

export default Navigation;