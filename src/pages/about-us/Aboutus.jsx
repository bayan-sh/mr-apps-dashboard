import React from 'react'
import './Aboutus.css'
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';  
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi' 
import { CiInstagram ,CiLinkedin } from "react-icons/ci" 
import { FaFacebook } from "react-icons/fa";
const course =[
  {
      title:'Instagram Account',
      icon:<CiInstagram/>
  },
  {
      title:'LinkedIn Account',
      icon:<CiLinkedin/>
  },
  {
      title:'Facebook Account',
      icon:<FaFacebook/>
  },



  ];

const Aboutus = () => {
  return (
    <div className='card--continer2'>
     { course.map((item)=>(
<div className='card2'>
<div className='card--cover'>{item.icon}</div>
<div className='card--title2'><h2>{item.title}</h2></div>
</div>

     ))}
    </div>
  )
}

export default Aboutus
