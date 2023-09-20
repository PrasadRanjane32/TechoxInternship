import React from 'react'
import { Link } from 'react-router-dom'
import './404style.css'

const PageNotFound = () => {
  return (
    <>
    <div id='notfound'>
                <div className='notfound'>
                    <div className=' four_zero_four_bg'>
                        <h1>404</h1>
                    </div>
                    <h2>Oops! You seem to be lost.</h2>
                    <p className='m-5'>The page you are looking for might been removed,
                        had it's name changed or is temporarily Unavailable.
                    </p>
                    <Link to='/'>Home</Link>
                </div>
            </div>
    </>
  )
}

export default PageNotFound