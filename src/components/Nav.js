import '../styles/nav.scss';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom'
function Navigation (){


    return (
        <nav className="healthy-nav ">
            <div className="nav-wrapper row container-fluid">
                <div className="col-lg-2 nav-logo">
                    <img src={logo} alt="Helpfully Healthy" ></img>
                </div>
                <div className="col-lg-10 nav-list">
                    <Link to="/search" className='nav-item'>Search</Link>
                </div>              
            </div>


        </nav>
    )

}

export default Navigation;