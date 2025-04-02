import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-2 border-red-500 flexBetween max-container padding-container relaive z-30 py-5'>
        <Link href="/">
        Home
        </Link>
    </div>
  )
}

export default Navbar
