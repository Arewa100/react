import React, { useState } from "react";
import style from '../styles/login.module.css'
import CustomButton from '../reuseables/CustomButton';
import {Link} from 'react-router-dom'

const Login = ()=> {

    const userDetails = {
        username: "",
        password: ""
    }

    const [data, setData] = useState(userDetails)

    function handleChange(event) {
        const{name, value} = event.target;
        setData((prevData)=>{
            return {...prevData, [name]:value} 
        })
    }


    return (
        <>
        <div className="loginBody">
        
            <form action="#" className={style.form}>

                <div className={style.login}>
                    <h1>Login</h1>
                </div>
                <div>
                    <input
                    type="text"
                    className={style.input}
                    name="username"
                    placeholder="Enter Username"
                        onChange={handleChange}
                    required
                    />
                </div>
                <div>
                    <input
                    type="password"
                    className={style.input}
                    name="email"
                    placeholder="Enter password"
                        onChange={handleChange}
                    required
                    />
                </div>
                <div className={style.submit}>
                    <CustomButton style={style.button} type="submit" textContent="login"/>
                </div>

                <div className={style.dontHaveAccount}>
                    <p>Don't have an account?<Link to={'/signup'}>signup</Link></p>
                </div>
            </form>
        </div>
        </>
    )
}

export default Login;