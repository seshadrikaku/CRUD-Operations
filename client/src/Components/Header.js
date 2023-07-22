import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>

      <nav className="nav nav-pills bg-dark text-light fw-bold mb-5 nav-justified">
        <a className='nav-link text-light ' href='#'>CRUD </a>
        <a className="nav-link text-light " aria-current="page" href="/">Home</a>
        <a className="nav-link text-light " href="/adduser">AddUser</a>
      </nav>
    </>
  )
}

export default Header