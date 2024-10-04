

import React from 'react'

const Header = () => {
  return (
    <div className='header-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-3 categories'>
                    <button><span className='bi bi-list'></span>All Categoeies <span className='bi bi-chevron-down'></span></button>
                </div>
                <div className='info col-7'>
                    <a>Home</a>
                    <a>Shop +</a>
                    <a>Pages +</a>
                    <a>About</a>
                    <a>Blog</a>
                    <a>User Dashboard</a>
                    <a>Contact</a>
                </div>
                <div className='seller-btn col-2'>
                    <button>Seller Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header