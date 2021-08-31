import React, {useEffect, useState, useContext} from 'react';
import { AuthContext } from './authContext';

const SignUp = () => {

    const [user, setUser] = useContext(AuthContext);
     const [Name, setName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        if (!e.target.checkValidity()) {
            e.preventDefault();
            e.stopPropagation();
        } else {

            if(user.find(item=> email === item.email )){ alert('email already taken'); }
            else {

                setUser([
                    ...user, 
                    {name: Name, email: email, password: password, isUser: false}
                ]);
                alert('Registered Successfully! login now...');
                
            }
           
        } 
        e.target.classList.add("was-validated");
    }
    useEffect(()=> {
        localStorage.setItem("auth", JSON.stringify(user));
    }, [user])


    return (
<div className="modal fade" id="lcontainer2" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="lcontainerLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create your Account.</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form method="GET" onSubmit={e => handleForm(e)} className="needs-validation p-3" id="regform" noValidate>
            <div className="row">
              <div className="col-6">
                <label htmlFor="Fname" className="form-label">First Name:</label>
                <input className="form-control" form="regform" type="text" name="Fname" id="Fname"  required />
                <div className="invalid-feedback">
                  Write your first Name!
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="Lname" className="form-label">Last Name:</label>
                <input className="form-control" form="regform" type="text" name="Lname" id="Lname"  required />
                <div className="invalid-feedback">
                  Last name is required!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="username" className="form-label">User Name:</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input className="form-control" form="regform" type="text" name="username" id="username" value={Name} onChange={e => setName(e.target.value)} required />
                  <div className="invalid-feedback">
                    Username can't be empty!
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="Email" className="form-label">Email :</label>
                <input className="form-control" form="regform" type="email" name="Email" id="Email" value={email} onChange={e => setemail(e.target.value)} required />
                <div className="invalid-feedback">
                  email address is required!
                </div>	
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password:</label>
                <input className="form-control mb-2" form="regform" type="password" name="password" id="password" value={password} onChange={e => setpassword(e.target.value)}  required />
                <div className="invalid-feedback">
                  Password required!
                </div>
              </div>
            </div>
            <input type="checkbox" form="regform" className="form-check-input " name="remember" id="remember2" />
            <label htmlFor="remember2" className="form-check-label  ps-2"> Remember Me</label>
            <div className="text-center mt-3">
              <input type="submit" form="regform" className="btn btn-md btn-info m-auto w-100"  />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <p>
            Already registered? <a href="#" data-bs-target="#mContainer" data-bs-toggle="modal" data-bs-dismiss="modal" aria-label="Close">Login Now!</a>
          </p>
        </div>
      </div>
    </div>
  </div>
    )
}

export default SignUp
