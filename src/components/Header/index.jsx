import {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {BsFillXCircleFill} from 'react-icons/bs'
import './index.css'

function Header() {
  const [open, setOpen] = useState(false)
  
  return (
    <nav>
  <NavLink activeClassName="active" to="/">
      <h1 className='head hovering'>Devi Mallela</h1>
  </NavLink>
  <button
    onClick={() => setOpen(!open)}
    type="button"
    className="hamburger"
  >
    <span> </span>
    <span> </span>
    <span> </span>
  </button>
  <ul className={open ? 'open' : 'close'}>
    <li key="Home" className="hovering">
      <NavLink activeClassName="active" to="/about">
        About
      </NavLink>
    </li>
    <li key="projects" className="hovering">
      <NavLink activeClassName="active" to="/projects">
        Projects
      </NavLink>
    </li>
    <li key="contact" className="hovering">
      <NavLink activeClassName="active" to="/contact">
        Contacts
      </NavLink>
    </li>
    <li key="cancel" className="cancle-icon">
      <BsFillXCircleFill onClick={() => setOpen(!open)} />
    </li>
  </ul>
</nav>

  )
}



export default Header