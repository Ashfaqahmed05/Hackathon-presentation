import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
            <footer className="text-gray-600 body-font bg-sky-900">
                <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
                        <span className="text-xl font-bold">Logo</span>
                    </a>
                    <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 logo —
                        <Link
                        to={'/'}
                            className="text-gray-100 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            logo
                        </Link>
                    </p>
                    

                        
                </div>
            </footer>
        </div>
  )
}

export default Footer