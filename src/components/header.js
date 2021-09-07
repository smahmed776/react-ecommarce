import { bottom } from '@popperjs/core';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './auth/authContext';
import { Login, ResetForm } from './auth/login';
import SignUp from './auth/signUp';
import Cart from './Cart';
// import "bootstrap/dist/js/bootstrap.bundle"
import './header.css'

const Header = () => {


  const [user, setUser] = useContext(AuthContext);
  const [search, setSearch] = useState("")
  // console.log(isUser[0].isUser)

  // const UserObj = user?  [{
  //     name: user[user.findIndex(item => item.isUser === true)].name
  //   }] : null;

  const logout = (e) => {
    e.preventDefault();
    // console.log(userObj())
    

      if(user.find(item => item.isUser === true)){

        user[user.findIndex(item => item.isUser === true)].isUser = false
        setUser([...user])

      }
  }

  const userObj = ()=> {
    if (user.length <= 0) {
      return false
      } else if (user.length >= 0) {

        if(user.find(item => item.isUser === true)){
          return  {
            name: user[user.findIndex(item => item.isUser === true)].name,
            username: user[user.findIndex(item => item.isUser === true)].username
          }
        } else {
          return false
        } 
      }
  }
  const searchHandle = e => {
 
    setSearch("");
  }

  const showSearch = () => {
    document.getElementById('searchform').classList.toggle("searchShow");
  }
  const handledropdown = () => {
    document.getElementById('profile').classList.toggle('showprofile')
  }

  const headerprofiledrop = () =>{
    document.getElementById("profiledrop").classList.toggle("d-block");
  }
  const profiledropmob = () =>{
    document.getElementById("mprofiledrop").classList.toggle("d-block");
  }

 


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
                <form action={`/search?q=${search}`} className="form-inline float-right me-auto searchform" onSubmit={e => searchHandle(e)} id="searchform" >
                    <div className="input-group" >
                        <div className="form-floating">
                            <input className="form-control" type="search" id="searchfloating" placeholder="search" name="search" value={search} onChange={(e)=> setSearch(e.target.value)}  required style={{ "height": "43px" }} />
                            <label htmlFor="searchfloating" className="searchlabel" style={{ "top": "-7px" }}>Search for products</label>
                        </div>
                        <div className="input-group-text" style={{ padding: "0", borderTopRightRadius: "5px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "5px" }} id="inputGroupPrepend">
                            <Link to={`/search?q=${search}`} style={{width: "100%", height: "100%"}}>
                              <button type="submit" name="Search" className="btn btn-success w-100 h-100"  placeholder="Search"> 
                                <span className="bi bi-search text-white"></span>
                              </button>
                            </Link>
                        </div>
                    </div>
                </form>

                <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{ width: "43%", WebkitBoxPack: "end", WebkitJustifyContent: "flex-end", msFlexPack: "end", justifyContent: "flex-end", WebkitAlignItems: "center", WebkitBoxAlign: "center", msFlexAlign: "center", alingnItems: "center" }}>
                    <ul className="navbar-nav navul align-items-center">
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" >About Us</a>
                        </li>
                        <li className="nav-item navitem">
                            <Link to="/" className="nav-link px-2" >Home</Link>
                        </li>
                        {
                          userObj()? 
                        <>
                        <li className="nav-item navitem ">
                          <div className="dropdown">
                            <button className="btn nav-link p-0 m-0 dropdown-toggle" type="button"  onClick={headerprofiledrop}>     
                              <img src="./img/pic2.jpg" className="rounded-pill me-2" height="35px" width="35px" alt="" />
                              {` ${userObj().name}`}
                            </button>
                          <ul class="dropdown-menu" id="profiledrop">
                            <li><Link class="dropdown-item" to={`/profile/${userObj().username}`}>Profile</Link></li>
                            <li><a className="nav-link px-2" onClick={e => logout(e)}>Log Out</a></li>
                          </ul>  
                          </div>
                        </li>
                        </>
                        :
                        <>
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal">Register</a>
                        </li>
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" href="#" data-bs-target="#mContainer" data-bs-toggle="modal">Login</a>
                        </li>
                        </>
                        }
                        <li className="nav-item navitem dropdown mcart" id="mcart">
                          <Cart mobile={false}/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div>
  {/* ==========================================================================
       for mobile display
  ==============================================================================  */}
  <div className="header container-fluid navbar fixed-bottom" id="mobilenav">
    <ul className="navbar-nav navbar-expand-sm navul2">
      <li className="nav-item navitem">
        <Link to="/" className="nav-link px-0 py-0" style={{padding: ".4rem 0!important"}} ><span className="bi bi-house-door"></span>Home</Link>
      </li>

      <li className="nav-item navitem">
        <a className="nav-link px-0 py-0" href="#" onClick={showSearch} style={{padding: ".4rem 0!important"}} ><span className="bi bi-search" /> Search</a>
      </li>

      <li className="nav-item navitem btn-group dropup">
        <Cart mobile={true}/>
      </li>
      {
      userObj()? 
      <li className="nav-item navitem btn-group">
         <div className="dropup">
           <button className=" nav-link btn px-0 py-0 text-dark mb-0 dropdown-toggle" style={{ padding: "0 !important", fontSize: ".6rem"}} onClick={profiledropmob}> 
           <img src="./img/pic2.jpg" className="rounded-pill mb-2" style={{marginTop:"-10px"}} height="25px" width="25px" alt="" />
         {`${userObj().name}`}
        </button>
        <ul class="dropdown-menu" id="mprofiledrop" style={{
          position: "absolute",
          bottom: "2.5rem"
        }}>
          <li><Link class="dropdown-item" to={`/profile/${userObj().username}`}>Profile</Link></li>
          <li><a className="nav-link px-2" onClick={e => logout(e)}>Log Out</a></li>
        </ul>  
        </div>
      </li>
      :
      <li className="nav-item navitem btn-group dropup">
       <button className=" nav-link btn dropdown-toggle px-0 py-0 text-dark mb-0" onClick={handledropdown}  data-bs-toggle="dropdown" aria-expanded="false"  style={{ fontSize: ".6rem"}}><span className="bi bi-person-circle" ></span>
         Profile
        </button> 
        <ul className="dropdown-menu justify-content-between" id="profile" 
         style={{width:"100%",position:"absolute",left:"-65px",transition:"bottom .6s ease"}}>
          <li>
          <div className="dropdown-item  bg-light" style={{"height":"45px",paddingTop:"10px",WebkitTextAlign:"center",textAlign:"center"}}>
            <a style={{WebkitTextDecoration:"none",textDecoration:"none",WebkitTextAlign:"center",textAlign:"center","padding":"10px 12px 10px 12px","width":"100%"}} href="#" data-bs-target="#mContainer" data-bs-toggle="modal">Login</a>
          </div>
          </li>
          <hr />
          <li>
          <div className="dropdown-item  bg-light" style={{"height":"45px",paddingTop:"10px",WebkitTextAlign:"center",textAlign:"center"}}>
            <a style={{WebkitTextDecoration:"none",textDecoration:"none",WebkitTextAlign:"center",textAlign:"center","padding":"10px 12px 10px 12px","width":"100%"}} href="#" data-bs-target="#lcontainer2" data-bs-toggle="modal">Register</a>
          </div>
          </li>
        </ul>
      </li>
      }

      <li className="nav-item navitem" id="btnnav">
        <button className="navbar-toggler navbar-light btntoggles pb-2" type="button" data-bs-toggle="modal" data-bs-target="#mobilenavbar">
          <div style={{"display":"inline-block","cursor":"pointer"}} >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </button>
      </li>
    </ul>
  </div>
        <div class="modal fade" id="mobilenavbar" aria-hidden="true" aria-labelledby="mobilenavbarLabel" tabindex="-1">
          <div className="modal-dialog modal-fullscreen-sm-down">
            <div className="modal-content">
              <div class="modal-header">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                    Show a second modal and hide this one with the button below.
              </div>
              <div class="modal-footer">
                <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Open second modal</button>
              </div>
            </div>
          </div>
        </div>
  {/* Modal login and registration form */}
  <Login />
  {/* Register form */}
  <SignUp />
  {/* // restes form */}
  <ResetForm />
</div>        
    </>
                )
}

export default Header;
