import React from 'react'
import './NearCEP.css'
import Link from 'next/link'
const Nearcep = () => {
  return (
    <div>
        <div className="nc-maindiv">
            <h1>Looking to upscale your skills? Find nearest center!</h1>
            <Link href="/training_centers"><button>Locate Center</button></Link>
        </div>
    </div>
  )
}

export default Nearcep