import React from 'react'
import './NotFound.css'

import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <section className='Not-Found'>
          <div className='container not-found-container'>
            <h1>404</h1>
            <h3>Opps, This Page is still under Maintenance</h3>
            <Link to={'/'} className='btn btn-border'>Go To Home</Link>
          </div>
    
        </section>
      )
}

export default NotFound