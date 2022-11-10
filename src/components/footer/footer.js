import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="dark:bg-gray-800">
        <footer className="footer footer-center p-10 text-base-content rounded">
            <div className="grid grid-flow-col gap-4">
                <NavLink to="/" className="link link-hover text-white">About Me</NavLink> 
                <NavLink to="/" className="link link-hover text-white">Contact</NavLink>       
            </div>
            <div>
                <p className="text-white">Copyright © 2022 - All right reserved by Lone Traveller</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer