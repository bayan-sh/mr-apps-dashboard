
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateServicesAction } from '../../redux/actions/ServicesAction';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { imageURL } from '../../redux/Api';
import './UpdateServices.css'

const UpdateServices = () => {

  const location = useLocation();
  console.log(location)
  const params = new URLSearchParams(location.search);
  const encodedData = params.get("data");
  const decodedData = JSON.parse(decodeURIComponent(encodedData));
  console.log(decodedData)
  const { id } = useParams()
  const { services } = useSelector((state) => state.service)
  const dispatch = useDispatch()
  const [utitleen, settitleen] = useState(decodedData.title_en);
  const [utitlear, settitlear] = useState(decodedData.title_ar);
  const [udescriptionen, setdescriptionen] = useState(decodedData.description_en);
  const [udescriptionar, setdescriptionar] = useState(decodedData.description_ar);
  const [uimage, setimage] = useState([]);
  const navigte = useNavigate()
  const onupdateservices = (e) => {
    e.preventDefault()

    let formData = new FormData()
    formData.append("title_en", utitleen)
    formData.append("title_ar", utitlear)
    formData.append("description_en", udescriptionen)
    formData.append("description_ar", udescriptionar)

    if (uimage.length !== 0) {
      formData.append("image", uimage)
    }
    let info = {
      id : id,
      obj : formData
    }
    dispatch(updateServicesAction(info)).then(({ payload }) => {
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
      <form className='flex' onSubmit={onupdateservices} >
        <h3>Update Services</h3>
        <div className='inputsservices22'>
          <label htmlFor=''>English Title</label>
          <div className='inputserv2'>
            <input type='text' placeholder='Title' value={utitleen} onChange={e => settitleen(e.target.value)} />
          </div>
          <label htmlFor=''>Arabic Title</label>
          <div className='inputserv2'>
            <input type='text' placeholder='title' value={utitlear} onChange={e => settitlear(e.target.value)} />
          </div>
          <label htmlFor=''>English Description</label>
          <div className='inputserv2'>
            <input type='text' placeholder='descrition' value={udescriptionen} onChange={e => setdescriptionen(e.target.value)} />
          </div>
          <label htmlFor=''>Arabic Description</label>
          <div className='inputserv2'>
            <input type='text' placeholder='descreoition' value={udescriptionar} onChange={e => setdescriptionar(e.target.value)} />
          </div>
          <label htmlFor=''> Image</label>
          <div className='inputserv2'>

            <input type='file' placeholder='image' onChange={e => { setimage(e.target.files[0]) }} />
          </div>
          <div><img src={imageURL + decodedData.imagePath} alt="" style={{ width: "120px" }} /></div>
        </div>
        <button className='btnrservices2'>Update</button>
      </form>
    </div>
  )
}

export default UpdateServices
