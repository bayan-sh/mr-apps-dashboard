import React, { useState } from 'react'
import './Contact.css'
import { useDispatch, useSelector } from 'react-redux';
import { ContactAction } from '../../redux/actions/ContactAction';
import { useNavigate } from 'react-router-dom';

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
                 navigte("/home")
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
            <form className='flex ' onSubmit={registerhandle}>
                <h3>CONTACT PAGE</h3>
                <label htmlFor=''>Email</label>
                <input type='email' placeholder='Email' value={email} defaultValue={"asdasd"} onChange={(e) => setemail(e.target.value)} required />
                <label htmlFor=''>Message</label>
                <input type='message' placeholder='message' value={message} onChange={(e) => setmessage(e.target.value)} required />
                <label htmlFor=''>Name</label>
                <input type='name' placeholder='name' value={name} onChange={(e) => setname(e.target.value)} required />
                <button type='submit' className='btnr'>Login</button>
            </form>
    </div>
  )
}

export default Contact