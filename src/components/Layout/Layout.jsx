import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className='main-content min-h-screen flex flex-col items-center justify-center'>{children}</div>
            <Footer />
        </div>
    )
}

export default Layout