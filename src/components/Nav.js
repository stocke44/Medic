import '../styles/nav.scss';
import logo from '../images/logo.png';
import {Link} from 'react-router-dom'
function Navigation (){


    return (
        <nav className="healthy-nav ">
            <div className="nav-wrapper row container-fluid">
                <div className="col-md-2 col-4 nav-logo">
                    <Link to="/">
                        <img src={logo} alt="Helpfully Healthy" />
                    </Link>
                </div>
                <div className="col-md-10 col-8 nav-list">
                    <h3><Link to="/search" className='nav-item'>Search</Link></h3>
                </div>              
            </div>


        </nav>
    )

}

export default Navigation;