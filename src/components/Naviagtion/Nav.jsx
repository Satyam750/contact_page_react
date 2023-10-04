import React from 'react'
import styles from "./Nav.module.css"
const Nav = () => {
  return (

    <nav className={`container ${styles.navigation}`}>
   <div className='logo'>
   </div>
   <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
    </ul>

   
      
    </nav>
  )
}

export default Nav
