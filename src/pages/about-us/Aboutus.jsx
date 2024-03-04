import React, { useEffect, useState } from 'react'
import './Aboutus.css'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { GetAboutUsAction } from '../../redux/actions/AboutUsAction'
import { BiBuilding, BiLogoAndroid, BiLogoHtml5 } from 'react-icons/bi'

import { useDispatch, useSelector } from 'react-redux';
import { baseURL, imageURL } from '../../redux/Api';
import { useNavigate } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { Button } from 'primereact/button';
import web from '../../assets/web1.jpg'
import { MdEmail } from "react-icons/md";
import { CiInstagram, CiLinkedin } from "react-icons/ci"



const Aboutus = () => {
  const { aboutUs } = useSelector((state) => state.aboutUs)
  const header = (
    <img className='photo' alt="Card" src={web} />
  );
  const footer = (
    <>
      <div className='Links'>
        <div className='link'> <MdEmail className='icons' /><p>{aboutUs.email}</p></div>
        <div className='link'><CiLinkedin className='icons' /><p>{aboutUs.linkedIn}</p></div>
        <div className='link'> <CiInstagram className='icons' /><p>{aboutUs.instagram}</p></div>
        <div className='link'><FaFacebook className='icons' /><p>{aboutUs.facebook}</p></div>
      </div>
    </>
  );

  const content = ({});
  const dispatch = useDispatch()
  const navigte = useNavigate()
  console.log(aboutUs)
  useEffect(() => {
    let info = {


    }
    dispatch(GetAboutUsAction()).then(({ payload }) => {
      console.log(payload)

    })
  }, [])
  return (
    <div className='card2'>
      <div className="card33  ">
        <Card value={aboutUs} title="About us" footer={footer} header={header} className="md:w-25rem">
          <p className="m-0">
            <div className='description'>{aboutUs.main_description}<br /><br />
              {aboutUs.main_description_ar}</div>
          </p>
        </Card>
        <Link to={{
          pathname: "/Aboutedit",
          search: `data=${encodeURIComponent(JSON.stringify(aboutUs))}`,
        }}
          className='view'>
          <FaRegEdit className='icon' />Edit
        </Link>
      </div>
    </div>
  )
}

export default Aboutus
