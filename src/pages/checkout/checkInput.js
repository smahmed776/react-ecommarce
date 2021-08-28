import React from 'react'

const CheckInput = () => {
    return (
<div className="col-lg-8 col-md-7 my-4">
                    <h4 className="my-4">বিল পরিশোধের ঠিকানাঃ</h4>
                    <form action="" method="get" className="needs-validation" id="form1" novalidate>
                        <div className="row g-3">
                            <div className="col-6">
                                <label for="Fname" className="form-label">প্রথম নাম:</label>
                                <input type="text" name="Fname" className="form-control" id="Fname" value="" placeholder="" required />
                                    <div className="invalid-feedback">আপনার প্রথম নাম লিখুন।</div>
                            </div>
                            
                            <div className="col-6">
                                <label for="Lname" className="form-label">শেষ নাম:</label>
                                <input type="text" className="form-control" id="Lname" name="Lname" value="" placeholder="" required />
                                <div className="invalid-feedback">আপনার শেষ নাম লিখুন।</div>
                            </div>
                            
                            <div className="col-12">
                                <label for="Uname" className="form-label">ইউজারনেম:</label>
                                <div className="input-group">
                                    <span className="input-group-text" style={{fontFamily: "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>@</span>
                                    <input name="Uname" type="text" id="Uname" className="form-control" value="" placeholder="" required/>
                                    <div className="invalid-feedback">আপনার ইউজারনেম দিন।</div>
                                </div>
                            </div>

					        <div className="col-12">
                                <label for="email" className="form-label">ইমেইল এড্রেস: <span className="text-muted">(অতিরিক্ত)</span></label>
                                <input name="email" type="email" id="email" className="form-control" placeholder="someone@example.com" value=""/>
                                <div className="invalid-feedback">ইমেইল এড্রেস সঠিকভাবে লিখুন।</div>
					        </div>
                            
                            <div className="col-12">
                                <label for="adress" className="form-label">আপনার বর্তমান ঠিকানাঃ</label>
                                <input type="text" name="adress" id="adress" className="form-control" value="" required />
                            </div>

					        <div className="col-12">
                                <label for="adress2" className="form-label">আপনার স্থায়ী ঠিকানাঃ <span className="text-muted">(অতিরিক্ত)</span></label>
                                <input type="text" className="form-control" id="adress2" name="adress2" value="" placeholder="" />
                            </div>

					        <div className="col-4">
                                <label for="district" className="form-label">জেলাঃ</label>
                                <select name="district" id="district" className="form-select" required>
                                    <option value="Sylhet">সিলেট</option>
                                    <option value="Sunamgonj">সুনামগঞ্জ</option>
                                    <option value="MoulaviBazar">মৌলভীবাজার</option>
                                    <option value="Hobigonj">হবিগঞ্জ</option>
                                </select>
                            </div>

					        <div className="col-4">
						        <label for="thana" className="form-label">থানাঃ</label>
						        <select name="thana" id="thana" className="form-select" required>
						        	<option value="jogonnathpur">জগন্নাথপুর</option>
						        	<option value="dirai">দিরাই</option>
						        	<option value="tahirpur">তাহিরপুর</option>
						        	<option value="shalla">শাল্লা</option>
						        	<option value="bishomvorpur">বিশম্ভরপুর</option>
						        	<option value="sadar">সদর</option>
						        </select>
					        </div>

					        <div className="col-4">
					        	<label for="postoffice" className="form-label">পোস্ট অফিসঃ</label>
					        	<input type="text" name="postoffice" id="postoffice" className="form-control" value="" required />
					        	<div className="invalid-feedback">আপনার পোস্ট অফিসের নাম দিন।</div>
					        </div>
				        </div>
				        
                        <hr className="my-4" />

				        <div className="form-check my-2">
				        	<input type="checkbox" name="sameadress" className="form-check-input" id="sameadress" />
				        	<label for="sameadress" className="form-check-label">বিল পরিশোধ ও পণ্য পাঠানোর ঠিকানা একই।</label>
				        </div>
        
	 			        <div className="form-check my-2">
				        	<input type="checkbox" className="form-check-input" id="saveadress" />
				        	<label for="saveadress" className="form-check-label">পরবর্তীতে ব্যবহারের জন্য ঠিকানা সংরক্ষণ করে রাখুন।</label>
				        </div>
        
				        
				        <hr className="my-4" />
				        
				        <h4 className="my-3">বিল পরিশোধের পদ্ধতিঃ</h4>
        
				        <div className="my-3">
				        	<div className="form-check my-2">
				        		<div>
                                    <input name="payment"  type="radio" className="form-check-input" value="bkash" id="bkash"  required />
                                    <label for="bkash" className="form-check-label">বিকাশ</label>
				        	    </div>
				        		
				            </div>

					       <div className="" id="bkashPayment">
						        <div className="card card-body">
							        <h3 className="text-center">মার্চেন্ট নাম্বার: <span className="text-success">০১৭১৭০৮৯০৪৪</span></h3>
							        <ul className="list-group">
								        <li className="list-group-item">
									        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
									        	role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
									        	style={{height: "15px", paddingRight: "5px"}} >
									        	<path fill="currentColor" 
									        		d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
									        	</path>
									        </svg>
									         মোবাইল থেকে ডায়াল করুন *247#
								        </li>

								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	পেমেন্ট অপশন সিলেক্ট করো।
								        </li>

								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	আমাদের বিকাশ মার্চেন্ট নাম্বারঃ 01717089044 লিখো।
								        </li>
        
								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	টাকার পরিমানঃ 5500
								        </li>
        
								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	রেফারেন্সঃ তোমার নাম
								        </li>
        
								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	কাউন্টার নাম্বারঃ 1
								        </li>
        
								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	তোমার পিন নাম্বার দিয়ে পেমেন্ট কমপ্লিট করো
								        </li>
        
								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	যে নাম্বার থেকে বিকাশ করেছ তা এবং ট্রানজেকশন আইডি/TrxID, উপরের ফর্মে ফিলাপ করে দাও।
								        </li>
        
								        <li className="list-group-item">
								        	<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-square" className="svg-inline--fa fa-check-square fa-w-14 " 
								        		role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
								        		style={{height: "15px", paddingRight: "5px"}}>
								        		<path fill="currentColor" 
								        			d="M400 480H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48v352c0 26.51-21.49 48-48 48zm-204.686-98.059l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.248-16.379-6.249-22.628 0L184 302.745l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.25 16.379 6.25 22.628.001z">
								        		</path>
								        	</svg>
								        	ট্রানজেকশন আইডি/TrxID দেওয়ার সময় অবশ্যই ভাল করে খেয়াল করে, 
								        	জিরো '0', ইংরেজি ও 'o', ইংরেজি বড় হাতে অক্ষর আই 'I' ও ইংরেজি 
								        	ছোট হাতে অক্ষর এল 'l' দেখে দিবে। সাধারন ভাবে ট্রানজেকশন আইডি/TrxID 
								        	বড় হাতে অক্ষরে দেওয়া থাকে ।
								        </li>
							        </ul>
							
							        <hr className="my-4" />

							        <label for="bkashNumber" className="form-label">বিকাশ নাম্বার:</label>
							        <input type="number" maxlength="12" className="form-control" name="bkashNumber" id="bkashNumber" required />
							        <div className="invalid-feedback">
							        	আপনার বিকাশ নাম্বার দিন।
							        </div>
							        <label for="bkashTrxId" className="form-label my-3">পেমেন্টের TrxId: </label>
							        <input type="text" className="form-control" name="bkashTrxId" id="bkashTrxId" required />
							        <div className="invalid-feedback">
							        	TrxID লিখুন।
							        </div>
							
						        </div>
					        </div>

					
				            {/* this is credit card section */}

					        <div className="form-check my-2">
					           <input name="payment" type="radio" className="form-check-input" id="creditcard" value="creditCard" checked required />
					           <label for="creditcard" className="form-check-label">ক্রেডিট কার্ড</label>
					        </div>
        
					        <div className="" id="creditPayment">
					        	<div className="card card-body">
					        		<div className="row gy-3">
					        			<div className="col-md-6">
					        			  <label for="cc-name" className="form-label">Name on card</label>
					        			  <input type="text" className="form-control" id="cc-name" placeholder="" required />
					        			  <small className="text-muted">Full name as displayed on card</small>
					        			  <div className="invalid-feedback">Name on card is required</div>
					        			</div>
					        
					        			<div className="col-md-6">
					        			  <label for="cc-number" className="form-label">Credit card number</label>
					        			  <input type="text" className="form-control" id="cc-number" placeholder="" required />
					        			  <div className="invalid-feedback">Credit card number is required</div>
					        			</div>
					        
					        			<div className="col-md-3">
					        			  <label for="cc-expiration" className="form-label">Expiration</label>
					        			  <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
					        			  <div className="invalid-feedback">
					        				Expiration date required
					        			  </div>
					        			</div>
					        
					        			<div className="col-md-3">
					        			  <label for="cc-cvv" className="form-label">CVV</label>
					        			  <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
					        			  <div className="invalid-feedback">Security code required</div>
					        			</div>
					        		</div>
					        	</div>
					        </div>

					
					        <div className="form-check my-2">
					           <input name="payment" type="radio" className="form-check-input" id="cashondelivery" value="cashOnDelivery" required />
					           <label for="cashondelivery" className="form-check-label">ক্যাশ অন ডেলিভারী</label>
					        </div>
        
					        <div className="" id="cashOnPayment">
					        	<div className="card card-body">thid id hidden</div>
					        </div>

				        </div>

				        <hr className="my-4" />

				        <input type="submit" value="submit" className="btn btn-success w-100" />
			        </form>
		        </div>
    )
}

export default CheckInput
