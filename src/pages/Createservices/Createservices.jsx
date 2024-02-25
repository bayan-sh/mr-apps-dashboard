
import './Createservices.css'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ServicesAction } from '../../redux/actions/ServicesAction';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'



const Createservices = () => {
    const { services } = useSelector((state) => state.service)
    const dispatch = useDispatch()
    const [titleen, settitleen] = useState("");
    const [titlear, settitlear] = useState("");
    const [descriptionen, setdescriptionen] = useState("");
    const [descriptionar, setdescriptionar] = useState("");
    const [image, setimage] = useState();
    const navigte = useNavigate()
    const registerhandle = (e) => {
        e.preventDefault()
        console.table(titleen, titlear, descriptionen, descriptionar, image)
        let formData = new FormData()
        formData.append("title_en", titleen)
        formData.append("title_ar", titlear)
        formData.append("description_en", descriptionen)
        formData.append("description_ar", descriptionar)
        formData.append("image", image)
        dispatch(ServicesAction(formData)).then(({ payload }) => {
            console.log(payload)
            if (payload.status) {
                navigte("/services")
                 
                //  window.location.href="/asdasd"
            }
            else {
                //alert("Somethingh Wring")
            }
        })

    }
  return (
    <div>
            <form className='flex ' onSubmit={registerhandle}>
                <h3>Great Services</h3>
                <div className='inputsservices'>
                <label htmlFor=''>English Title</label>
                    <div className='inputserv'>
                <input type='text' placeholder='Title' value={titleen} onChange={(e) => settitleen(e.target.value)} required />
                </div>
                <label htmlFor=''>Arabic Title</label>
                <div className='inputserv'> 
                <input type='text' placeholder='Title' value={titlear} onChange={(e) => settitlear(e.target.value)} required />
                </div>
                <label htmlFor=''>English Description</label>
                <div className='inputserv'>
                <input type='text' placeholder='Description' value={descriptionen} onChange={(e) => setdescriptionen(e.target.value)} required />
                </div>
                <label htmlFor=''>Arabic Description</label>
                <div className='inputserv'>
                <input type='text' placeholder='Description' value={descriptionar} onChange={(e) => setdescriptionar(e.target.value)} required />
                </div>
                <label htmlFor=''> Image</label>
                <div className='inputserv'>  
                <input type='file' placeholder='Image' onChange={(e) => setimage(e.target.files[0])} required />
               </div>
                </div>
                <button type='submit' className='btnrservices'>Greate</button>
            </form>


    </div>
  )
}

export default Createservices
