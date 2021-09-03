import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext, IsAuthContext } from './auth/authContext';
import Login from './auth/login';
import SignUp from './auth/signUp';
import Cart from './Cart';

import './header.css'

const Header = () => {


  const [user, setUser] = useContext(AuthContext);
  const [isUser, setIsUser] = useContext(IsAuthContext);
  console.log(isUser[0].isUser)

  // const UserObj = user?  [{
  //     name: user[user.findIndex(item => item.isUser === true)].name
  //   }] : null;

  const logout = (e) => {
    e.preventDefault();
    console.log(userObj())
    

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
            name: user[user.findIndex(item => item.isUser === true)].name
          }
        } else {
          return false
        } 
      }
  }

  // useEffect(() => {
  //   localStorage.setItem("isLogged", JSON.stringify(isUser))
  // }, [isUser])


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
                <form className="form-inline float-right me-auto searchform" id="searchform" >
                    <div className="input-group" >
                        <div className="form-floating">
                            <input className="form-control" type="search" id="searchfloating" name="search" placeholder="Search for your products" required title="hi" style={{ "height": "43px" }} />
                            <label htmlFor="searchfloating" className="searchlabel" style={{ "top": "-7px" }}>Search</label>
                        </div>
                        <div className="input-group-text" style={{ padding: "0", borderTopRightRadius: "5px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", borderBottomRightRadius: "5px" }} id="inputGroupPrepend">
                            <button type="submit" name="Search" className="btn btn-success w-100 h-100" placeholder="Search"> 
                              <span className="bi bi-search text-white"></span>
                            </button>
                        </div>
                    </div>
                </form>
                {/* <button className="navbar-toggler navbar-light btntoggle" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
                    <div  style={{ "display": "inline-block", "cursor": "pointer" }}>
                        <div className="bar1" />
                        <div className="bar2" />
                        <div className="bar3" />
                    </div>
                </button> */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar" style={{ width: "43%", WebkitBoxPack: "end", WebkitJustifyContent: "flex-end", msFlexPack: "end", justifyContent: "flex-end", WebkitAlignItems: "center", WebkitBoxAlign: "center", msFlexAlign: "center", alingnItems: "center" }}>
                    <ul className="navbar-nav navul">
                        <li className="nav-item navitem">
                            <a className="nav-link px-2" >About Us</a>
                        </li>
                        <li className="nav-item navitem">
                            <Link to="/" className="nav-link px-2" >Home</Link>
                        </li>
                        {
                          userObj()? 
                        <>
                        <li className="nav-item navitem">
                            <p className="nav-link px-2" >{`Hi, ${userObj().name}`}</p>
                            
                        </li>
                        <li className="nav-item navitem">
                          <a className="nav-link px-2" onClick={e => logout(e)}>Log Out</a>
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
        <a className="nav-link px-0 py-0" href="#" style={{padding: ".4rem 0!important"}} ><span className="bi bi-search" /> Search</a>
      </li>

      <li className="nav-item navitem btn-group dropup">
        <Cart mobile={true}/>
      </li>
      {
      userObj()? 
      <li className="nav-item navitem btn-group">
       <div>
       <p className=" nav-link btn px-0 py-0 text-dark mb-0" style={{ padding: "0 !important", fontSize: ".6rem"}}><span className="bi bi-person-circle" ></span>
         {`HI,  ${userObj().name}`}
        </p> 
        <a onClick={e => logout(e)}>Log out</a>
       </div>
      </li>
      :
      <li className="nav-item navitem btn-group dropup">
       <button className=" nav-link btn dropdown-toggle px-0 py-0 text-dark mb-0" id="profile" data-bs-toggle="dropdown" aria-expanded="false"  style={{ fontSize: ".6rem"}}><span className="bi bi-person-circle" ></span>
         Profile
        </button> 
        <ul className="dropdown-menu justify-content-between" 
         aria-labelledby="profile"
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
        <button className="navbar-toggler navbar-light btntoggles pb-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar" aria-controls="collapsibleNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <div style={{"display":"inline-block","cursor":"pointer"}} >
            <div className="bar1" />
            <div className="bar2" />
            <div className="bar3" />
          </div>
        </button>
      </li>
    </ul>
  </div>
  {/* Modal login and registration form */}
  <Login />
  {/* Register form */}
  <SignUp />
</div>        
    </>
                )
}

export default Header;
