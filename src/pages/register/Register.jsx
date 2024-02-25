import React, { useState } from 'react'
import './register.css'
import { useDispatch, useSelector } from 'react-redux';
import { LogInAction } from '../../redux/actions/AuthAction';
import { useNavigate } from 'react-router-dom';

const Register = () => {
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
                 navigte("/home")
            //  window.location.href="/asdasd"
            }
            else {
                //alert("Somehitn Wring")
            }
        })

    }
    return (
        <div>
            <form className='flex ' onSubmit={registerhandle}>
                <h3>LOGIN PAGE</h3>
                <label htmlFor=''>Email</label>
                <input type='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} required />
                <label htmlFor=''>Password</label>
                <input type='password' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} required />
                <button type='submit' className='btnr'>Login</button>
            </form>
        </div>
    )
}

export default Register