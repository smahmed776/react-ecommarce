import React from 'react'

const CheckBoard = ({itemCount, total, cartItem}) => {
    return (
<div className="col-lg-4 col-md-5 order-md-last" >
                    <h4 className="justify-content-between d-flex">
                        <span className="text-primary"> পণ্য</span>
                        <span className="badge bg-primary rounded-pill" id="itempill">{itemCount}</span>
                    </h4>
                    

                            <table className="table table-striped bfont">
                            <tbody>
                        {cartItem.map(item => (
                           
                                <tr>
                                    <td>
                                        <div>
                                            <h6 id="firstitem">{item.itemName}</h6>
                                            <small className="text-muted">x {item.quantity} টি</small>
					                    </div>
                                    </td>
                                    <td>
                                        <div>
                                            <span id="price1" className="text-muted">{item.quantity * item.price}</span>
                                            <span className="text-success"> টাকা</span>
                                        </div>
                                    </td>
                                </tr>
                        // </li>
                        
                        ))}
                        
                        <tr>
                            <td>
                            <div>
                                <h6>ছাড়</h6>
                                <small className="text-muted">১০%</small>
                            </div>
                            </td>
                            <td>
                            <div>
                                <span>-</span>
                                <span id="priceOff" className="text-muted">2000</span>
                                <span className="text-success"> টাকা</span>
                            </div>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                            <div className="text-success">
                                <h6>কুপন কোড</h6>
                                <small className="text-muted">0%off</small>
                            </div>
                            </td>
                            <td>
                            <div>
                                <span>-</span>
                                <span id="promoCode" className="text-success">0</span>
                                <span className="text-success"> টাকা</span>
                            </div>
                            </td>
                        </tr>
                        
                        <tr>
                            <td>
                            <div>
                                <h6>সর্বমোট-</h6>
                            </div>
                            </td>
                            <td>
                            <div>
                                <span id="totalCost" className="text-muted">{total}</span>
                                <span className="text-muted"> টাকা</span>
                            </div>
                            </td>
                        </tr>
                    {/* </ul> */}
                        </tbody>
                    </table>
                </div>
    )
}

export default CheckBoard
