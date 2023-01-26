import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav>
            <span>
               <Link to="/">Home</Link> 
            </span>
            <span>
              <Link to="/student">Student</Link>  
            </span>
            <span>
             <Link to="contact"> Contact</Link>  
            </span>
            
        </nav>
    </div>
  )
}
