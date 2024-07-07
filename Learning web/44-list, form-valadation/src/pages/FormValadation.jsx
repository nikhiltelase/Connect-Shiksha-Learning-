import React from 'react'
import '../css/form.css'
import { useState } from 'react'


function FormValadation() {
    const [email, setemail] = useState('')
    const [password, setpass] = useState('')

    const [emailError, setemailerror] = useState('')
    const [passError, setpasserror] = useState('')
    const [success, setsuccess] = useState('')

    const handelSubmit = (e) => {
        e.preventDefault()
        setemailerror('')
        setpasserror('')
        setsuccess('')
        let formStatus = false
        //validate email
        if (!email) {
            setemailerror('email is required')
            formStatus = false
        }else{
            if (email.includes('@')) {
                formStatus = true
            }else{
                setemailerror('please enter write email')
                formStatus = false
            }
            
        }
        //validate password
        if (!password) {
            setpasserror('password is required')
            formStatus = false
        }else{
            if (password.length >= 8) {
                formStatus = true
            }else{
                setpasserror('password lenght is 8 or morethan 8 required')
                formStatus = false
            }
            
        }
        //api call
        if(formStatus) {
            setsuccess('Submited succefully')
        }

    }
    return (
        <>
            <main>
                <div className='form-container'>
                    <h1 className='heading'>From valadation</h1>
                    <form onSubmit={handelSubmit}>
                        <input type='text' placeholder='Email' onChange={(e) => (setemail(e.target.value))} autoFocus/> <br />
                        <p className='error'>{emailError}</p>

                        <input type="password" placeholder='Password' onChange={(e) => (setpass(e.target.value))} />
                        <p className="error">{passError}</p>

                        <br />
                        <div className='button-container'>
                            <button type='submit'>submit</button>
                            <p className="success">{success}</p>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}

export default FormValadation