import React, { useState } from 'react'
import './Login.css'
import { MdOutlineMail,MdOutlinePassword } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { LogInAction } from '../../redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const { login } = useSelector((state) => state.login)
    const dispath = useDispatch()
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const navigte = useNavigate()
    const registerhandle = (e) => {
        e.preventDefault()
        console.table(email, password)
        let formData = new FormData()
        formData.append("email", email)
        formData.append("password", password)
        dispath(LogInAction(formData)).then(({ payload }) => {
            if (payload.status) {
                console.log(payload.token)
                localStorage.setItem('usertoken',(payload.token))
                 navigte("/services")
            //  window.location.href="/asdasd"
            }
            else {
                //alert("Somehitn Wring")
            }
        })

    }

  return (
    <form className='formcontainer' onSubmit={registerhandle}>
        <div className='header'>
            <div className='text'>Login</div>
            <div className='underline'></div>
        </div>
      <div className='inputs'>

        <div className='input'>
<MdOutlineMail className='iconform'/>
<input type='email'  placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} required />

        </div>

        <div className='input'>
<MdOutlinePassword className='iconform'/>
<input type='password'  placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} required />

        </div>
      </div>
      <div className='forgot-password'>Lost password ? <span>click Here</span> </div>
      <div className='submit-container'>
    
      <button  type='submit' className='submit'>Login</button>
      </div>
    </form>
  )
}

export default Login
