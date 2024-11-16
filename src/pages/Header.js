import React from 'react'
import {Link} from 'react-router-dom'

const Header = function() {
   return (
         <header>
              <Link to="/">#VANLife</Link>
              <nav>
                 <Link to="/about">About</Link> 
              </nav>
         </header>
   )
}

export default Header ;