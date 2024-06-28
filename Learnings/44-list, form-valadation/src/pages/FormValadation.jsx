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
        
        if (!email) {
            setemailerror('email is required')
            formStatus = false
        }else{
            if (email.includes('@')) {
                formStatus = true
            }else{
                setemailerror('please enter write email')
            }
            
        }

        if (!password) {
            setpasserror('password is required')
            formStatus = false
        }else{
            if (password.length <= 8) {
                console.log('pass small')
                setpasserror('password lenght is 8 or morethan 8 required')
                formStatus = false
            }else(
                formStatus = true
            )
            
        }

        if(formStatus) {
            setsuccess('Submited succefully')
        }

    }
    return (
        <>
            <main>
                <div className='form-container'>
                    <h1>From valadation</h1>
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