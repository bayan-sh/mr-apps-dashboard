import React, { useEffect, useState } from 'react'
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import './Services.css'
import { useDispatch, useSelector } from 'react-redux';
import { getServicesAction, deletServicesAction } from '../../redux/actions/ServicesAction';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { Paginator } from 'primereact/paginator';
import { baseURL, imageURL } from '../../redux/Api';

const Services = () => {
  const { services } = useSelector((state) => state.service)
  const handaledelet = (id) => {
    dispatch(deletServicesAction(id))
  }
  const dispatch = useDispatch()
  const navigte = useNavigate()
  console.log(services)
  useEffect(() => {
    let info = {
      page: 1,
      size: 100
    }
    dispatch(getServicesAction(info)).then(({ payload }) => {
      console.log(payload)
      if (payload.status) {
        // navigte("/Home")

        //  window.location.href="/asdasd"
      }
      else {
        //alert("Somethingh Wring")
      }
    })
  }, [])

  return (
    <div>
      <div className="card">
        <DataTable value={services} tableStyle={{ minWidth: '50rem' }}>
          <Column sortable field="_id" header="ID"></Column>
          <Column field="title_en" header="Title English"></Column>
          <Column field="title_ar" header="Title  Arabic"></Column>
          <Column field="description_en" header="Description English"></Column>
          <Column field="description_ar" header="Description Arabic"></Column>
          <Column body={(rowData) => { return <img src={imageURL + rowData.imagePath} style={{ width: "120px" }} /> }} header="Image"></Column>
          {/* <Column  body={(rowData) => { return <Link  to={`/services/${rowData._id}`} style={{ background:"#d2d6dc" }}>Edit</Link> }} header="Edit"></Column> */}
          <Column body={(rowData) => {
            const encodedData = encodeURIComponent(JSON.stringify(rowData));
            return <Link to={{
              pathname: `/services/${rowData._id}`,
              search: `data=${encodedData}`,
            }} style={{ background: "#d2d6dc",fontSize:"13px" }}>Edit</Link>
          }} header="Edit"></Column>

          <Column body={(rowData) => { return <button onClick={() => handaledelet(rowData._id)} style={{ background: "#d2d6dc" ,borderColor:'transparent',width:"70px",height:"35px",borderRadius:"10px",fontSize:"13px",color:"#7a99b6" }}>Delete</button> }} header="Delete"></Column>
          {/* <Column field='imagePath' header="imagePath"></Column> */}

        </DataTable>
        {/* {projects[0].imagePath} */}
      </div >
      <Link to="/createservices" className='create'>
        Creat services
      </Link>

    </div >
  )
}

export default Services