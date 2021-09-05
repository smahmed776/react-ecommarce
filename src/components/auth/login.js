import React, { useContext, useEffect, useState } from 'react'
import { AuthContext, IsAuthContext} from './authContext';

const Login = () => {

    const [user, setUser] = useContext(AuthContext);
    const [isUser, setIsUser] = useContext(IsAuthContext);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        if(!e.target.checkValidity()){
            e.preventDefault();
            e.stopPropagation();
            console.log("prevented");
        }else {
            if (user.find(item => email === item.email && password === item.password)) {
              user[user.findIndex(item => email === item.email && password === item.password)].isUser= true;  
              alert('login Successfull')
              // console.log(user)
              setUser([...user]);
              setIsUser([
                {
                  isUser:  user[user.findIndex(item => email === item.email && password === item.password)].isUser
                }
              ])
              console.log(isUser);
              
            } else if(user.find(item => email === item.email || password === item.password)) {
              alert('username and password does not match')

              console.log(isUser);
            } else {
              alert("User not found! Please register first..")
            }
           
            // console.log(" User Set");
            // console.log(user);
        }
        e.target.classList.add("was-validated");
    }

    useEffect(() => {
      localStorage.setItem("isLogged", JSON.stringify(isUser))
    }, [isUser])

    const eyeToggle = (e) => {
        e.target.classList.toggle("bi-eye-slash-fill");
        if (e.target.title === "show password") {
            e.target.title = "hide password";
        } else {
            e.target.title = "show password";
        }
        const passInp = document.getElementById('loginpassword');
        if (passInp.type === "password") {
            passInp.type = "text";
        } else {
            passInp.type = "password";
        }

    }


    return (
<div className="modal fade" id="mContainer" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="mContainerLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered" style={{fontFamily: "sans-serif, Arial"}}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">Login to your Account.</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form  className="needs-validation p-3" onSubmit={(e)=> formHandler(e)} id="lform" noValidate>
            <div className="row">
              <div className="cols-12">
                <label htmlFor="email" className="form-label">E-mail:</label>
                <input className="form-control" form="lform" type="email" name="email" id="email" value={email} onChange={e => setemail(e.target.value)} required />
                <div className="invalid-feedback">
                  Username can't be empty!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password:</label>
                <div className="input-group mb-2">
                  <input className="form-control " form="lform" type="password" name="password" id="loginpassword" value={password} onChange={e => setpassword(e.target.value)}  required />
                  <span className="input-group-text bi bi-eye-fill" style={{"cursor":"pointer"}} onClick={(e) => eyeToggle(e)} title="show password" id="showPass" />
                  <div className="invalid-feedback">
                    Password required!
                  </div>
                </div>
                <div id="passmsg">
                  <div className="passprog">
                    <div className="progbar" id="progbar" />
                  </div>
                  <h3>Password must contain the following:</h3>
                  <p id="letter" className="invalid">A <b>lowercase</b> letter</p>
                  <p id="capital" className="invalid">A <b>capital (uppercase)</b> letter</p>
                  <p id="number" className="invalid">A <b>number</b></p>
                  <p id="length" className="invalid">Minimum <b>8 characters</b></p>
                </div>
              </div>
            </div>
            <input type="checkbox" form="lform" className="form-check-input" name="remember" id="remember" />
            <label htmlFor="remember" className="form-check-label ps-2">Remember Me</label>
            <div className="text-center mt-3">
              <input type="submit" form="lform" className="btn btn-md btn-info m-auto w-100"  />
            </div>
          </form>
          <div className="text-center mt-2">
            <p>
              forgot password? <a style={{WebkitTextDecoration:"none",textDecoration:"none"}} href="#">Click Here</a> to reset!
            </p>
          </div>
        </div>
        <div className="modal-footer">
          <p>
            Not registered yet? <a href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close">Register Now!</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default Login
