
import React from 'react'

const Navbar = () => {
  return (
    <div className='nav-sec'>
        <div className='container'>
            <div className='nav'>
                <div className=' logo'><img src='../../images/logo.webp'/></div>
                <div className=' search'>
                  <input type='text' placeholder='search Product...' className='search-box'/>
                  <button>Search</button>
                </div>
                <div className=' details'>
                  <a><span className='bi bi-arrow-repeat'></span></a>
                  <a><span className='bi bi-heart'></span></a>
                  <a><span className='bi bi-handbag'></span></a>
                  <a><span className='bi bi-person'></span></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar