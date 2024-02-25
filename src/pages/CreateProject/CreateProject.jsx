import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProjectsAction } from '../../redux/actions/ProjectsAction';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import './CreateProject.css'

const CreateProject = () => {
    const { projects } = useSelector((state) => state.project)
    const dispatch = useDispatch()
    const [titleen, settitleen] = useState("");
    const [titlear, settitlear] = useState("");
    const [descriptionen, setdescriptionen] = useState("");
    const [descriptionar, setdescriptionar] = useState("");
    const [image, setimage] = useState();
    const [url, seturl] = useState();
    const navigte = useNavigate()
    const registerhandle = (e) => {
        e.preventDefault()
        console.table(titleen, titlear, descriptionen, descriptionar, image,url)
        let formData = new FormData()
        formData.append("title_en", titleen)
        formData.append("title_ar", titlear)
        formData.append("description_en", descriptionen)
        formData.append("description_ar", descriptionar)
        formData.append("image", image)
        formData.append("url", url)
        dispatch(ProjectsAction(formData)).then(({ payload }) => {
            console.log(payload)
            if (payload.status) {
                navigte("/projects")
                 
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
                <h3>Create Project</h3>
                <div className='inputsservices11'>
                <label htmlFor=''>English Title</label>
                <div className='inputserv12'>
                <input type='text' placeholder='Title' value={titleen} onChange={(e) => settitleen(e.target.value)} required />
               </div>
               <label htmlFor=''>Arabic Title</label>
                <div className='inputserv12'>
                <input type='text' placeholder='Title' value={titlear} onChange={(e) => settitlear(e.target.value)} required />
               </div>
                <label htmlFor=''>English Description</label>
                <div className='inputserv12'>
                <input type='text' placeholder='descreoition' value={descriptionen} onChange={(e) => setdescriptionen(e.target.value)} required />
               </div>
               <label htmlFor=''>Arabic Description</label>
                <div className='inputserv12'>
                <input type='text' placeholder='descreoition' value={descriptionar} onChange={(e) => setdescriptionar(e.target.value)} required />
               </div>
                <label htmlFor=''> URL</label>
                <div className='inputserv12'>
                <input type='email' placeholder='URL' value={url} onChange={(e) => seturl(e.target.value)} required />
               </div>
                <label htmlFor=''> Image</label>
               
             <input type='file' placeholder='image' onChange={(e) => setimage(e.target.files[0])} required />
             </div>
             <button type='submit' className='btnrservices12'>Greate</button>
            </form>
      
    </div>
  )
}

export default CreateProject
