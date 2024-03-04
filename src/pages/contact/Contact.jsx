import React, { useState } from 'react'
import './Contact.css'
import { useDispatch, useSelector } from 'react-redux';
import { ContactAction } from '../../redux/actions/ContactAction';
import { useNavigate } from 'react-router-dom';
import l from '../../assets/th.jpg'
import { Link } from 'react-router-dom'
import { BiChevronRightCircle } from "react-icons/bi";

const Contact = () => {
    const { contact } = useSelector((state) => state.contact)
    const dispath = useDispatch()
    const [email, setemail] = useState("");
    const [message, setmessage] = useState("");
    const [name, setname] = useState("");
    const navigte = useNavigate()
    const registerhandle = (e) => {
        e.preventDefault()
        console.table(email, message ,name)
        let formData = new FormData()
        formData.append("email", email)
        formData.append("message", message)
        formData.append("name", name)
        dispath(ContactAction(formData)).then(({ payload }) => {
            if (payload.status) {
                 navigte("/")
            //  window.location.href="/asdasd"
            }
            else {
                console.log(payload)
                //alert("Something Wring")
            }
        })

    }
  return (
    <div>
                     <Link to="/AllContact" className='view'>
                    <BiChevronRightCircle className='icon' />show
                </Link>
             <form className='flex1 ' onSubmit={registerhandle}>
                <h3>CONTACT PAGE</h3>
                <div className='total'>
                <div className='all'>
                <label htmlFor=''>Email</label>
                <div className='input1'>
                <input type='email' placeholder='Email' value={email}  onChange={(e) => setemail(e.target.value)} required />
                </div>
                <label htmlFor=''>Message</label>
                <div className='input1'>
                <input type='message' placeholder='message' value={message} onChange={(e) => setmessage(e.target.value)} required />
                </div>
                <label htmlFor=''>Name</label>
                <div className='input1'>
                <input type='name' placeholder='name' value={name} onChange={(e) => setname(e.target.value)} required />
                </div>
                
                <button type='submit' className='btnrcontact'>Login</button>
                </div>
                <img src={l} alt='' className='photo'/>
                </div>
            </form> 
    </div>
  )
}

export default Contact