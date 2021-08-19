import React from 'react';
import Cart from './Cart';
import './header.css'

const header = () => {
    // header change after scroll
    return (
    <>
        <div className="ps-0 pe-0 container-fluid sticky-top">
            <div className="header navbar navbar-expand-sm w-100 pt-2 pb-2 ps-2 pe-2" id="header">
                <div className="navbar-brand navbarbrand">
                    <h2 align="left" className="h2 ">ইজিশপিং.কম <span className="h3">-অনলাইনে কেনাকাটা করুন সহজেই </span>
                    </h2>
                </div>
                {/*=================================================================================
				 search bar 
			======================================================================================*/}
                <form className="form-inline float-right me-auto searchform" id="searchform" action>
                    <div className="input-group" style={{ WebkitFlexWrap: "nowrap", msFlexWrap: "nowrap", flexWrap: "nowrap" }}>
                        <div className="form-floating">
                            <input className="form-control" type="search" id="searchfloating" name="search" placeholder="Search for your products" required title="hi" style={{ "height": "43px" }} />
                            <label htmlFor="searchfloating" className="searchlabel" style={{ "top": "-7px" }}>Search</label>
                        </div>
                        <span className="input-group-text" style={{ padding: "0", backgroundColor: "#198754", borderTopRightRadius: "5px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "5px" }} id="inputGroupPrepend">
                            <input type="submit" name="Search" className="btn btn-md" placeholder="Search" value="" />
                            <span className="bi bi-search text-white" style={{ margin: "0 12px 0 -12px" }} />
                        </span>
                    </div>
                </form>
                <button className="navbar-toggler navbar-light btntoggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    {/* <span class="navbar-toggler-icon"></span> */}
                    <div className style={{ "display": "inline-block", "cursor": "pointer" }}>
                        <div className="bar1" />
                        <div className="bar2" />
                        <div className="bar3" />
                    </div>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{ WebkitBoxPack: "end", WebkitJustifyContent: "flex-end", msFlexPack: "end", justifyContent: "flex-end", "-webkit-align-items": "center", "-webkit-box-align": "center", "-ms-flex-align": "center", alingnItems: "center" }}>
                    <ul className="navbar-nav navul">
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" href>About Us</a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" href>Home</a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal">Register</a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" href="#" data-bs-target="#mContainer" data-bs-toggle="modal">Login</a>
                        </li>
                        <li className="nav-item navitem dropdown mcart" id="mcart">
                          <Cart />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
  {/* for mobile display  */}
  <div className="header container-fluid navbar w-100 fixed-bottom" id="mobilenav">
    <ul className="navbar-nav navul2">
      <li className="nav-item navitem">
        <a className="nav-link px-2" href><span className="bi bi-house-door" /> Home</a>
      </li>
      <li className="nav-item navitem">
        <a className="nav-link px-2" href="#" ><span className="bi bi-search" /> Search</a>
      </li>
      <li className="nav-item navitem dropdown">
        <a className="nav-link dropdown-toggle px-2 d-flex justify-content-center show" data-bs-toggle="dropdown" id="dropdown2" aria-expanded="true" style={{"padding":"4px 8px"}} href="#">
          <span className="bi bi-cart4" style={{"font-size":"21px","padding-right":"5px","-webkit-box-pack":"start","-webkit-justify-content":"flex-start","-ms-flex-pack":"start","justify-content":"flex-start","position":"relative"}}>
            <span className="bage bg-danger rounded-pill cart" style={{"position":"absolute","top":"0","right":"0"}} id="cartPill2">0</span>
          </span>
          <span style={{"margin-top":"-8px"}}>Cart</span>
        </a>
      </li>
      <li className="nav-item navitem">
        <a className="nav-link px-2" href="#" ><span className="bi bi-person-circle" /> Profile</a>
      </li>
      <div id="profile" className="d-none justify-content-between" style={{"width":"100%","position":"absolute","bottom":"-45px","left":"0","padding":"5px 35px 3px 35px","-webkit-transition":"bottom .6s ease","transition":"bottom .6s ease"}}>
        <div className="shadow bg-light" style={{"height":"45px","padding-top":"10px","width":"40%","-webkit-text-align":"center","text-align":"center"}}>
          <a style={{"-webkit-text-decoration":"none","text-decoration":"none","-webkit-text-align":"center","text-align":"center","padding":"10px 12px 10px 12px","width":"100%"}} href="#" data-bs-target="#mContainer" data-bs-toggle="modal">Login</a>
        </div>
        <div className="shadow bg-light" style={{"height":"45px","padding-top":"10px","width":"40%","-webkit-text-align":"center","text-align":"center"}}>
          <a style={{"-webkit-text-decoration":"none","text-decoration":"none","-webkit-text-align":"center","text-align":"center","padding":"10px 12px 10px 12px","width":"100%"}} href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal">Register</a>
        </div>
      </div>
      <li className="nav-item navitem" id="btnnav">
        <button className="navbar-toggler navbar-light btntoggles" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <div className style={{"display":"inline-block","cursor":"pointer"}} onclick="myFunction(this)">
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </button>
      </li>
    </ul>
  </div>
  {/* Modal login and registration form */}
  <div className="modal fade" id="mContainer" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="mContainerLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">Login to your Account.</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form method="GET" action className="needs-validation p-3" id="lform" noValidate>
            <div className="row">
              <div className="cols-12">
                <label htmlFor="username" className="form-label">User Name:</label>
                <input className="form-control" form="lform" type="text" name="username" id="username" defaultValue required />
                <div className="invalid-feedback">
                  Username can't be empty!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password:</label>
                <div className="input-group">
                  <input className="form-control" form="lform" type="password" name="password" id="password" defaultValue required />
                  <span className="input-group-text bi bi-eye-fill" style={{"cursor":"pointer"}} title="show password" id="showPass" onclick="showPass();" />
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
            <label htmlFor="remember" className="form-check-label">Remember Me</label>
            <div className="text-center mt-3">
              <input type="submit" form="lform" className="btn btn-md btn-info m-auto w-100" defaultValue="Log in" />
            </div>
          </form>
          <div className="text-center mt-2">
            <p>
              forgot password? <a href style={{"-webkit-text-decoration":"none","text-decoration":"none"}}>Click Here</a> to reset!
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
  {/* Register form */}
  <div className="modal fade" id="lcontainer2" tabIndex={-1} data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="lcontainerLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create your Account.</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          <form method="GET" action className="needs-validation p-3" id="regform" noValidate>
            <div className="row">
              <div className="col-6">
                <label htmlFor="Fname" className="form-label">First Name:</label>
                <input className="form-control" form="regform" type="text" name="Fname" id="Fname" defaultValue required />
                <div className="invalid-feedback">
                  Write your first Name!
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="Lname" className="form-label">Last Name:</label>
                <input className="form-control" form="regform" type="text" name="Lname" id="Lname" defaultValue required />
                <div className="invalid-feedback">
                  Last name is required!
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="username" className="form-label">User Name:</label>
                <div className="input-group">
                  <span className="input-group-text">@</span>
                  <input className="form-control" form="regform" type="text" name="username" id="username" defaultValue required />
                  <div className="invalid-feedback">
                    Username can't be empty!
                  </div>
                </div>
              </div>
              <div className="col-12">
                <label htmlFor="Email" className="form-label">Email :</label>
                <input className="form-control" form="regform" type="email" name="Email" id="Email" defaultValue required />
                <div className="invalid-feedback">
                  email address is required!
                </div>	
              </div>
              <div className="col-12">
                <label htmlFor="password" className="form-label">Password:</label>
                <input className="form-control" form="regform" type="password" name="password" id="password" defaultValue required />
                <div className="invalid-feedback">
                  Password required!
                </div>
              </div>
            </div>
            <input type="checkbox" form="regform" className="form-check-input" name="remember" id="remember2" />
            <label htmlFor="remember2" className="form-check-label">Remember Me</label>
            <div className="text-center mt-3">
              <input type="submit" form="regform" className="btn btn-md btn-info m-auto w-100" defaultValue="Register" />
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
</div>        
    </>
                )}

export default header;
