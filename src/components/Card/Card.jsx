import React from 'react'
import './Card.css'
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'
const course =[
{
    title:'web development',
    icon:<BiLogoHtml5/>
},
{
    title:'App development',
    duration:'2 Hours',
    icon:<BiLogoAndroid/>
},
{
    title:'Ux & UI',
    duration:'2 Hours',
    icon:<BiBuilding/>
},
];
const Card = () => {
  return (
    <div className='card--continer'>
     { course.map((item)=>(
<div className='card'>
<div className='card--cover'>{item.icon}</div>
<div className='card--title'><h2>{item.title}</h2></div>
</div>

     ))}
    </div>
  )
}

export default Card
