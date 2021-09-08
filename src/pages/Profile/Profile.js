import React, { useContext } from 'react'
import { AuthContext } from '../../components/auth/authContext'

const Profile = () => {

    const [user, setUser] = useContext(AuthContext)


    return (
        <>
        {user[user.findIndex(i=> i.isUser === true)]?
        
        <div className="container-fluid row g-3 me-2 my-4 px-1 py-2 position-relative">
            <div className="col-2 row border shadow-sm overflow-hidden p-0" id="mobdash" style={{
                position: "sticky",
                top: "20%",
                left: "2%",
                height: "301px",
                width: "17vw",
                justifyContent: "center",
                alignItems: "center"
                
               
               
            }}>
                <div className="col-12 py-2 px-0 position-absolute vh-50">
                    <ul className="nav nav-pills px-0 py-0 m-0 " style={{
                        listStyleType: "none",
                        display: 'flex',
                        justifyContent: 'center',
                        flexDirection: 'column'
                        
                        
                    }}>
                        <li className="nav-item w-100 py-3 px-0">
                            <a className="nav-link"> <span className="bi bi-graph-up pe-1"></span></a>
                        </li>
                        <hr />
                        <li className="nav-item w-100 py-3  px-0">
                            <a className="nav-link"> <span className="bi bi-cart pe-1"></span></a>
                        </li>
                        <hr />
                        <li className="nav-item w-100 py-3 px-0">
                            <a className="nav-link"> <span className="bi bi-heart-fill pe-1"></span></a>
                        </li>
                        <hr />
                        <li className="nav-item w-100 py-3 px-0">
                            <a className="nav-link accordion-button active" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" aria-current="page">
                                <span className="bi bi-gear pe-1"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-4 row border shadow-sm accordion" id="lgdash" style={{
                position: "sticky",
                top: "22%",
                left: "2%",
                minHeight: "40vh",
                height: "255px",
               width: "17vw"
               
            }}>
                <div className="col-12 py-2 ps-0 pe-4 position-absolute vh-50">
                    <ul className="nav nav-pills" style={{
                        listStyleType: "none",
                        padding: "0"
                    }}>
                        <li className="nav-item py-2 px-1">
                            <a className="nav-link"  style={{cursor: "pointer"}}> <span className="bi bi-graph-up pe-1"></span> DashBoard </a>
                        </li>
                     
                        <li className="nav-item py-2 px-1" >
                            <a className="nav-link" style={{cursor: "pointer"}}> <span className="bi bi-cart pe-1"></span> Orders </a>
                        </li>
                    
                        <li className="nav-item py-2 px-1" >
                            <a className="nav-link" style={{cursor: "pointer"}}> <span className="bi bi-heart-fill pe-1"></span> Wish list </a>
                        </li>
                      
                        <li className="nav-item py-2 px-1" >
                            <a className="nav-link accordion-button active" role="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" aria-current="page"> <span className="bi bi-gear pe-1"></span> Profile Setting </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="col-8 row accinfo accordion-item" id="collapseOne">
                <div className="col-12 ps-2" >
                    <h3 className="text-center bg-light p-2">Profile Setting</h3>
                    <hr />
                    <h5 className="py-2" >Account Information:</h5>
                </div>
           
                <div className="col-12 ps-2 mb-4 d-flex align-items-center justify-content-center" style={{
                    flexDirection: "column"
                }}>
                    {user[user.findIndex(i=> i.isUser === true)].image && <img src="/img/admin.jpg" height="135px" width="145px" className="p-1 rounded" alt={user[user.findIndex(i=> i.isUser === true)].name} />
                     || <span className="bi bi-person-circle" style={{
                         fontSize: "2rem"
                     }}></span>}
                    <p className="p-3">change profile picture</p>
                </div>


                <div className="col-5 ps-2">
                    <p>Full Name:</p>
                </div>
                <div className="col-7 ps-2">
                    <p>{user[user.findIndex(i=> i.isUser === true)].name}<span className="bi bi-pencil-square ps-4 text-primary" title="Edit" style={{cursor:"pointer"}}></span></p>
                </div>

                <div className="col-5 ps-2">
                    <p>username:</p>
                </div>
                <div className="col-7 ps-2">
                    <p>{user[user.findIndex(i=> i.isUser === true)].username}<span className="bi bi-pencil-square ps-4 text-primary" title="Edit" style={{cursor:"pointer"}}></span></p>
                </div>

                <div className="col-5 ps-2">
                    <p>Email Address:</p>
                </div>
                <div className="col-7 ps-2">
                    <p>{user[user.findIndex(i=> i.isUser === true)].email}<span className="bi bi-pencil-square ps-4 text-primary"  title="Edit" style={{cursor:"pointer"}}></span></p>
                </div>

                <div className="col-5 ps-2">
                    <p>Password:</p>
                </div>
                <div className="col-7 ps-2">
                    <input type="password" className="form-control w-50 d-inline" name="password" value="asdf1234" />
                    <span className="bi bi-pencil-square ps-4 text-primary"  title="Edit" style={{cursor:"pointer"}}></span>
                </div>

                <div className="col-5 ps-2">
                    <p>Address:</p>
                </div>
                <div className="col-7 ps-2 mt-1">
                    <p>House 10, Road 12 Block F, Niketan, Gulshan 1, Dhaka - 1212, Bangladesh</p>
                </div>

                <div className="col-5 ps-2">
                    <p>Mobile Number:</p>
                </div>
                <div className="col-7 ps-2 mt-1">
                    <p>01778978997</p>
                </div>


                <div className="col-12 ps-2 my-2">
                    <h5 className="mb-2">Payment Information</h5>
                    <hr />
                </div>


               <div className="col-6 ps-2">
                    <p>Credit Card Number:</p>
                </div>
                <div className="col-6 ps-2 mt-1">
                    <p>4068 789 789 1297</p>
                </div>

            </div>
        </div>
        :
        null
        }
        </>
    )
}

export default Profile
