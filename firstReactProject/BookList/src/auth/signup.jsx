import React, { useState } from "react";
import style from "../styles/signup.module.css";
import CustomButton from "../reuseables/CustomButton";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {

  const navigate = useNavigate();

  const userDetails = {
    username: "",
    email: "",
    password: "",
};

  
  const [data, setData] = useState(userDetails); 

  //****************we are here********************/
    function handleChange(event) {
      const { name, value } = event.target; //destructur what is coming in,,,,,in react yu cannot and never mutate your state directly
      // setData((prevData)=> ({...prevData, [name]:value}));    //try as much to study this path

      setData((preVData)=> {
        return {...preVData, [name]:value}   // read about spread operator
      })

    }

    // console.log(data)

    
    const handleSubmit = ()=> {
      console.log('submitted....')
      window.alert("signup successfull....")
      // setTimeout(()=>{
          navigate("/login")
      // }, 6000)
  }


  return (
    <>
      <div>
        <form action="" className={style.form} onSubmit={handleSubmit}>

        <div className={style.header}>
          <h1>sign up</h1>
        </div>

          <div>
            <input
              type="text"
              className={style.input}
              name="username"
              placeholder="Enter Username"
                onChange={handleChange}
                // value={data.username} //not really neccessary
              required
            />
          </div>
          <div>
            <input
              type="email"
              className={style.input}
              name="email"
              placeholder="Enter Email"
              onChange={handleChange}
              required
            />
          </div>
  
          <div>
            <input
              type="password"
              className={style.input}
              name="password"
              placeholder="Enter Password"
                onChange={handleChange}
              required
            />
          </div>

          <div>
            <input
              type="password"
              className={style.input}
              name="password"
              placeholder="confirm password"
                onChange={handleChange}
              required
            />
          </div>

          <div className={style.checkbox}>
            <input type="checkbox" />
            <p>I accept all terms & condition</p>
          </div>

          <div className={style.submit}>
            <CustomButton style={style.button} type="submit" textContent="sign-up"/>
          </div>

          <div className={style.alreadyHaveAccount}>
            <p>Already have an account?<Link to={'/login'}>login</Link></p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

//use case is a hook that allows us to manage the state of anything wheret a number or anything
//use state returns a function and then the initial state it all comes in in an array
