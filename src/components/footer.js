import React from 'react';
import './footer.css'

const footer = () => {
    return (
    <footer className="bg-dark text-white">
        <div className="row px-4 py-4 me-0 justify-content-start w-100 " style={{borderTop: "1px solid rgba(0,0,0,.125)"}}>
            <div className="col-3 text-left fcol">
                <h5 style={{color: "#e8ffea9c"}}>ABOUT</h5>
                <hr className="text-success"/>
                <ul className="flist ps-0" style={{listStyleType : "none"}}>
                    <li>
                        <a className="" style={{color : "#e8ffea9c"}} href="">About Us</a>
                    </li>
                    <li>
                        <a className="" style={{color : "#e8ffea9c"}} href="">Privacy Policy</a>
                    </li>
                    <li>
                        <a className="" style={{color : "#e8ffea9c"}} href="">Terms & Conditions</a>
                    </li>
                </ul>
            </div>
            
            <div className="col-4 text-left fcol">
                <h5 style={{color: "#e8ffea9c"}}>Contact</h5>
                <hr className="text-success" />
                <ul className="flist ps-0" style={{listStyleType: "none"}}>
                    <li>
                        <p className="ps-0 pe-5">
                            <span className="bi bi-house-door"></span>
                             House 10, Road 12
                             Block F, Niketan, Gulshan 1,
                             Dhaka - 1212, Bangladesh <br />
                             <span className="bi bi-telephone"></span> +8809000000000
                        </p>
        			</li>
                </ul>
            </div>
            
            <div className="col-4 text-left fcol" >
                <h5 style={{color : "#e8ffea9c"}}>WE ACCEPT</h5>
                <hr className="text-success"/>
                <ul className="flist ps-0" style={{listStyleType : "none"}}>
                    <li>
                        <img src="./img/weaccept.png" width="80%" alt="" />
                    </li>
                </ul>
                
                <h5 style={{color : "#e8ffea9c"}}>DOWNLOAD OUR APP</h5>
                <hr className="text-success"/>
                <div className="d-flex justify-content-between flist ps-0" style={{listStyleType : "none"}}>
                    <a href="">
                        <img src="./img/google-play-badge-pickaboo.png" width="40%" alt=""/>
                    </a>
                    <a href="">
                        <img src="./img/App-store-badge-pickaboo.png" width="40%" alt="" />
                    </a>
                </div>
            </div>
        			
        </div>
        
        <div className="border-top border-warning m-3 pb-4">
            <p className="text-center p-4">2021 - All rights reserved by Syed Mahbub</p>
        </div>
    </footer>
    )
        	{/*
        		<!--======================================================================================================
        			fixed social icons
        		===========================================================================================================-->
            	
            <div className="col-12" style={{"margin-top" : "15px"}}>
                <div className="row socialiconrow">
                    <div className="col socialiconcol shadow">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <span className="bi bi-facebook" style={{color : "#3c3cf8"}}></span>
                        </a>
                    </div>
                    
                    <div className="col socialiconcol shadow">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <span className="bi bi-youtube" style={{color : "red"}}></span>
                        </a>
                    </div>
                    
                    <div className="col socialiconcol shadow">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <span className="bi bi-instagram"></span>
                        </a>
                    </div>
                    
                    <div className="col socialiconcol shadow">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <span className="bi bi-linkedin"></span>
                        </a>
                    </div>
                </div> 
            </div>*/}
    
    
}

export default footer
