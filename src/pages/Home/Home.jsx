import React from 'react'
import Profile from '../../components/profile/Profile'
import Content from '../../components/Content/Content'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    
 <div className="dashboard--content">      
<Content/> 
<Link to="/Login" className='item1'>
                    Login
                </Link>
</div>
    
  )
}

export default Home
