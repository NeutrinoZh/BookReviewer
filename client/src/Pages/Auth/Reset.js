import { loc } from "../../Settings/localization"
import Routes from "../../Routes/Routes"
import Input from "../../Components/Input/Input"

import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { password_reset } from "../../Services/auth"


function Reset() {
    const inputEmail = useRef(null)

    const [ error, setErrorState ] = useState('')
    const [ success, setSuccessState ] = useState(false) 

    function submit() {
        password_reset(inputEmail.current.value, () => {
            setSuccessState(true)   
            setErrorState('')
        }, (error) => {
            setSuccessState(false)
            setErrorState(error)
        })
    }

    return (
        <div className="auth-container">
            <h1>{loc._auth.reset_title}</h1>

            <p className='error'>{loc.get(error, 'auth')}</p>
            { success && <p className='success'>{loc._auth.success_send_reset}</p> }

            <Input 
                name='email'
                _ref={inputEmail}
                type='email'
                label={loc._auth.email}
            />

            <button onClick={submit}>{loc._auth.send}</button>
            <Link to={Routes.signin}>
                <button>{loc._auth.signin}</button>
            </Link>
        </div>
    )
}

export default Reset