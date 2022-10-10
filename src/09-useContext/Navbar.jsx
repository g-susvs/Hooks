import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to='/'>useContext</Link>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

          <ul className="navbar-nav">
            {/* <li className="nav-item"> */}
              <NavLink 
              className={({isActive})=> `nav-link ${(isActive?' active': '')}`} 
              to="/" end>
                HOME
              </NavLink>
            {/* </li> */}
            {/* <li className="nav-item"> */}
              <NavLink 
              className={({isActive})=> `nav-link ${(isActive?' active': '')}`}  
              to="login">
                LOGIN
              </NavLink>
            {/* </li> */}
            {/* <li className="nav-item"> */}
              <NavLink 
              className={({isActive})=> `nav-link ${(isActive?' active': '')}`} 
              to="about">
                ABOUT
              </NavLink>
            {/* </li> */}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}
