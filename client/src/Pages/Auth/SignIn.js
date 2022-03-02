import { loc } from '../../Settings/localization'
import Routes from '../../Routes/Routes'
import Input from '../../Components/Input/Input'

import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { signin } from '../../Services/auth'

function SignIn() {
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)


    function submit() {
        signin(inputEmail.current.value, inputPassword.current.value)
    }

    return (
        <div className="auth-container">
            <h1>{loc.auth.signin_title}</h1>
            <Input 
                name='email'
                _ref={inputEmail}
                type='email'
                label={loc.auth.email}
            />
            <Input 
                name='password'
                _ref={inputPassword}
                type='password'
                label={loc.auth.password}
            />

            <div className='auth-buttons'>
                <button id='btn-signin' onClick={submit}>{loc.auth.signin}</button>
                <Link to={Routes.signup}>
                    <button id='btn-signup'>{loc.auth.signup}</button>
                </Link>
            </div>

            <div id='link-forgot'>
                <Link to={Routes.reset_password}>{loc.auth.forgot_password}</Link>
            </div>
        </div>
    )
}

export default SignIn