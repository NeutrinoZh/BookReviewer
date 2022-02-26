import { loc } from '../../Settings/localization'
import Routes from '../../Routes/Routes'
import Input from '../../Components/Input/Input'

import { useRef } from 'react'

import { Link } from 'react-router-dom'

function SignUp() {
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    const inputRepassword = useRef(null)

    return (
        <div className="auth-container">
            <h1>{loc.auth.signup_title}</h1>
            <Input 
                name='name'
                _ref={inputName}
                type='name'
                label={loc.auth.name}
            />
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
            <Input 
                name='repassword'
                _ref={inputRepassword}
                type='password'
                label={loc.auth.repassword}
            />

            <div className='auth-buttons'>
                <button id='btn-signup'>{loc.auth.signup}</button>
                <Link to={Routes.signin}>
                    <button id='btn-signin'>{loc.auth.signin}</button>
                </Link>
            </div>
        </div>
    )
}

export default SignUp