<<<<<<< HEAD
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

=======
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            <div className='main-content min-h-screen'>{children}</div>
            <Footer />
        </div>
    )
}

>>>>>>> 8f30ee90b351a4d5d388d83cef02cc77953d738d
export default Layout