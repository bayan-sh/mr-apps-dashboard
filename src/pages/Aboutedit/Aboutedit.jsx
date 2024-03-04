import React, { useEffect, useState } from 'react'
import { UpdateAboutUsAction } from '../../redux/actions/AboutUsAction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { imageURL } from '../../redux/Api';
import './Aboutedit.css'

const Aboutedit = () => {
    const location = useLocation();
    console.log(location)
    const params = new URLSearchParams(location.search);
    const encodedData = params.get("data");
    console.log(encodedData)
    
    const decodedData = JSON.parse(decodeURIComponent(encodedData));
    console.log(decodedData)
  
    const { aboutUs } = useSelector((state) => state.aboutUs)
    const dispatch = useDispatch()
    const [uemail, setemail] = useState(decodedData.email);
    const [ufacebook, setfacebook] = useState(decodedData.facebook);
    const [ulinkedIn, setlinkedin] = useState(decodedData.linkedIn);
    const [uinstagram, setinstagram] = useState(decodedData.instagram);
    const [udescriptionen, setdescriptionen] = useState(decodedData.main_description);
    const [udescriptionar, setdescriptionar] = useState(decodedData.main_description_ar);
    const navigte = useNavigate()
    const onupdateabout = (e) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append("email", uemail)
        formData.append("facebook", ufacebook)
        formData.append("linkedIn", ulinkedIn)
        formData.append("instagram", uinstagram)
        formData.append("main_description", udescriptionen)
        formData.append("main_description_ar", udescriptionar)
let info={
  obj: formData
}

        dispatch(UpdateAboutUsAction(info)).then(({ payload }) => {
          console.log(payload)
          if (payload.status) {
            // navigte("/Home")
    
            //  window.location.href="/asdasd"
        
          }
          else {
            //alert("Somethingh Wring")
          }
        })
      }
    
  return (
    <div>
       <form className='flex3' onSubmit={onupdateabout} >
        <h3>Update About</h3>
        <div className='inputsservices3'>

        <label htmlFor=''>Email</label>
          <div className='inputserv3'>
            <input type='text' placeholder='email' value={uemail} onChange={e => setemail(e.target.value)} />
          </div>
        <label htmlFor=''>Facebook URl</label>
          <div className='inputserv3'>
            <input type='text' placeholder='Title' value={ufacebook} onChange={e => setfacebook(e.target.value)} />
          </div>

          <label htmlFor=''>Instagram URl</label>
          <div className='inputserv3'>
            <input type='text' placeholder='Title' value={uinstagram} onChange={e => setinstagram(e.target.value)} />
          </div>
          <label htmlFor=''>LinkedIn URl</label>
          <div className='inputserv3'>
            <input type='text' placeholder='title' value={ulinkedIn} onChange={e => setlinkedin(e.target.value)} />
          </div>
          <label htmlFor=''>Main English Description</label>
          <div className='inputserv3'>
            <input type='text' placeholder='descrition' value={udescriptionen} onChange={e => setdescriptionen(e.target.value)} />
          </div>
          <label htmlFor=''>Main Arabic Description</label>
          <div className='inputserv3'>
            <input type='text' placeholder='descreoition' value={udescriptionar} onChange={e => setdescriptionar(e.target.value)} />
          </div>

        </div>
        <button className='btnrservices3'>Update</button>
      </form>
    </div>
  )
}

export default Aboutedit
