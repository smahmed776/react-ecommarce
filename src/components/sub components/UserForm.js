import React from 'react'

const UserForm = ({user}) => {
    return (
        <>
            <div className="col-12">
                <label for="Fname" className="col-form-label d-inline">নাম:</label>
                <input type="text" name="Fname" className="form-control-plaintext d-inline ps-3 w-auto" id="Fname" value={user.name} readOnly />
            </div>

            <div className="col-12">
    

                <label for="email" className="form-label d-inline w-25">ইমেইল এড্রেস: </label>
                
                

                <input name="email" type="email" id="email" className="form-control-plaintext ps-3 d-inline w-75" value={user.email} readOnly/>
                
			</div>
            <div className="col-12">
                <label for="password" className="form-label">Confirm your password : </label>
                <input name="password" type="password" id="password" className="form-control" required/>
                <div className="invalid-feedback" id="passfeedback">Password required</div>
			</div>
        </>
    )
}

export default UserForm
