
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { useDispatch, useSelector } from 'react-redux';
import { getProjectsAction,deletProjectsAction } from '../../redux/actions/ProjectsAction';
import { useNavigate } from 'react-router-dom';
// import { ProductService } from './service/ProductService';
import './Projects.css'
import { Paginator } from 'primereact/paginator';
import { baseURL,imageURL } from '../../redux/Api';
import { Link } from 'react-router-dom'

const Projects = () => {

  const { projects } = useSelector((state) => state.project)
  const handaledelet = (id) => {
    dispatch(deletProjectsAction(id))
  }
  const dispatch = useDispatch()
  const navigte = useNavigate()

  console.log(projects)
  useEffect(() => {
    let info = {
      page: 1,
      size: 100
    }
    dispatch(getProjectsAction(info)).then(({ payload }) => {
      console.log(payload)
      if (payload.status) {
        console.log(projects)
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
      <DataTable value={projects} tableStyle={{ minWidth: '50rem' }}>
        <Column sortable field="_id" header="ID"></Column>
        <Column field="title_en" header="Title English"></Column>
        <Column field="title_ar" header="Title  Arabic"></Column>
        <Column field="description_en" header="Description English"></Column>
        <Column field="description_ar" header="Description Arabic"></Column>
        <Column field="URL" header="URL"></Column>

        <Column body={(rowData) => { return <img src={imageURL + rowData.imagePath} style={{ width: "120px" }} /> }} header="Image"></Column>
        {/* <Column field='imagePath' header="imagePath"></Column> */}
        
        <Column  body={(rowData) => {  const encodedData = encodeURIComponent(JSON.stringify(rowData)); return <Link  to={{              pathname: `/projects/${rowData._id}`,
              search: `data=${encodedData}`,}} style={{ background: "#d2d6dc",fontSize:"13px"  }}>Edit</Link> }} header="Edit"></Column>
        
        <Column body={(rowData) => { return <button onClick={() => handaledelet(rowData._id)}  style={{ background: "#d2d6dc" ,borderColor:'transparent',width:"70px",height:"35px",borderRadius:"10px",fontSize:"13px",color:"#7a99b6"  }}>Delete</button> }} header="Delete"></Column>
      </DataTable>
      {/* {projects[0].imagePath} */}
    </div>

<Link to="/CreateProject" className='create'>
Creat Project
</Link>
</div>

  )
}

export default Projects
