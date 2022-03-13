import { loc } from '../../Settings/localization'
import Routes from '../../Routes/Routes'
import Input from '../../Components/Input/Input'

import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signin } from '../../Services/auth'

function SignIn() {
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)

    const navigate = useNavigate()
    const [ error, setErrorState ] = useState('')

    function submit() {
        signin(inputEmail.current.value, inputPassword.current.value, () => {
            navigate(Routes.home)
        }, setErrorState)
    }

    return (
        <div className="auth-container">
            <h1>{loc._auth.signin_title}</h1>

            <p className='error'>{loc.get(error, 'auth')}</p>

            <Input 
                name='email'
                _ref={inputEmail}
                type='email'
                label={loc._auth.email}
            />
            <Input 
                name='password'
                _ref={inputPassword}
                type='password'
                label={loc._auth.password}
            />

            <div className='auth-buttons'>
                <button id='btn-signin' onClick={submit}>{loc._auth.signin}</button>
                <Link to={Routes.signup}>
                    <button id='btn-signup'>{loc._auth.signup}</button>
                </Link>
            </div>

            <div id='link-forgot'>
                <Link to={Routes.reset_password}>{loc._auth.forgot_password}</Link>
            </div>
        </div>
    )
}

export default SignIn