import React from 'react'
import './Sidebar.css';
import { BiHome, BiBookAlt, BiMessage, BiSolidReport, BiStats, BiTask, BiHelpCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className='menu'>
            <div className='logo'>
                <BiBookAlt className='logo-icon' />
                <h2>MR-APPS</h2>
            </div>
            <div className='menu--list'>
                <Link to="/" className='item'>
                    <BiHome className='icon' />Dashboard
                </Link>

                <Link to="/services" className='item'>
                    <BiTask className='icon' /> Services
                </Link>

                <Link to="/projects" className='item'>
                    <BiSolidReport className='icon' />Projects
                </Link>

                <Link to="/aboutus" className='item'>
                    <BiStats className='icon' />Stats
                </Link>
                <Link to='#' className='item'>
                    <BiMessage className='icon' />Message
                </Link>
                <Link to="/Aboutus" className='item'>
                    <BiHelpCircle className='icon' />About Us
                </Link>
            </div>
        </div>
    )
}

export default Sidebar