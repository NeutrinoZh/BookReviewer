import { loc } from '../../Settings/localization'
import Routes from '../../Routes/Routes'
import Input from '../../Components/Input/Input'

import { useRef, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../Services/auth'

function SignUp() {
    const inputName = useRef(null)
    const inputEmail = useRef(null)
    const inputPassword = useRef(null)
    const inputRepassword = useRef(null)

    const navigate = useNavigate()
    const [ error, setErrorState ] = useState('')

    function submit() {
        signup({
            name: inputName.current.value,
            email: inputEmail.current.value,
            password: inputPassword.current.value,
            repassword: inputRepassword.current.value
        }, () => {
            navigate(Routes.signin)
        }, setErrorState)
    }

    return (
        <div className="auth-container">
            <h1>{loc._auth.signup_title}</h1>
        
            <p className='error'>{loc.get(error, 'auth')}</p>

            <Input 
                name='name'
                _ref={inputName}
                type='name'
                label={loc._auth.name}
            />
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
            <Input 
                name='repassword'
                _ref={inputRepassword}
                type='password'
                label={loc._auth.repassword}
            />

            <div className='auth-buttons'>
                <button id='btn-signup' onClick={submit}>{loc._auth.signup}</button>
                <Link to={Routes.signin}>
                    <button id='btn-signin'>{loc._auth.signin}</button>
                </Link>
            </div>
        </div>
    )
}

export default SignUp