import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { updateProjectsAction } from '../../redux/actions/ProjectsAction';
import { Link } from 'react-router-dom'
import { imageURL } from '../../redux/Api';
import './UpdateProject.css'

const UpdateProject = () => {
const location = useLocation();
console.log(location)
const params = new URLSearchParams(location.search);
const encodedData = params.get("data");
const decodedData = JSON.parse(decodeURIComponent(encodedData));
console.log(decodedData)
const { id } = useParams()
  const { projects } = useSelector((state) => state.project)
  const dispatch = useDispatch()
  const [utitleen, settitleen] = useState(decodedData.title_en);
  const [utitlear, settitlear] = useState(decodedData.title_ar);
  const [udescriptionen, setdescriptionen] = useState(decodedData.description_en);
  const [udescriptionar, setdescriptionar] = useState(decodedData.description_ar);
  const [uimage, setimage] = useState([]);
  const [uurl, seturl] = useState(decodedData.url);
  const navigte = useNavigate()
  const onupdateprojects = (e) => {
      e.preventDefault()
      
      let formData = new FormData()
      formData.append("title_en", utitleen)
      formData.append("title_ar", utitlear)
      formData.append("description_en", udescriptionen)
      formData.append("description_ar", udescriptionar)
     
      formData.append("url", uurl)
      if (uimage.length !== 0) {
        formData.append("image", uimage)
      }
      let info = {
        id : id,
        obj : formData
      }
      dispatch(updateProjectsAction(info)).then(({ payload }) => {
          console.log(payload)
          if (payload.status) {
            //   navigte("/")
               
              //  window.location.href="/asdasd"
          }
          else {
              //alert("Somethingh Wring")
          }
      })

  }






  return (
    <div>
            <form className='flex ' onSubmit={onupdateprojects}>
                <h3>Update Project</h3>
                <div className='inputsservices1'>
                <label htmlFor=''>English Title</label>
                <div className='inputserv1'>
                <input type='text' placeholder='Title' value={utitleen} onChange={(e) => settitleen(e.target.value)} required />
               </div>

               <label htmlFor=''>Arabic Title</label>
                <div className='inputserv1'>
                <input type='text' placeholder='Title' value={utitlear} onChange={(e) => settitlear(e.target.value)} required />
               </div>

                <label htmlFor=''> English Description</label>
                <div className='inputserv1'>
                <input type='text' placeholder='descreoition' value={udescriptionen} onChange={(e) => setdescriptionen(e.target.value)} required />
               </div>

               <label htmlFor=''> Arabic Description</label>
                <div className='inputserv1'>
                <input type='text' placeholder='descreoition' value={udescriptionar} onChange={(e) => setdescriptionar(e.target.value)} required />
               </div>

                <label htmlFor=''> URL</label>
                <div className='inputserv1'>
                <input type='email' placeholder='URL' value={uurl} onChange={(e) => seturl(e.target.value)} required />
               </div>
                <label htmlFor=''> Image</label>
               
             <input type='file' placeholder='image' onChange={e =>{ setimage(e.target.files[0])}} required />
             </div><div><img src={imageURL + decodedData.imagePath} alt="" style={{ width: "120px" }}/></div>
             
             <button type='submit' className='btnrservices1'>Update</button>
            </form>


    </div>
  )
}

export default UpdateProject
