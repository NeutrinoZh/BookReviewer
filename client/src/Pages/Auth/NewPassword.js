import { loc } from '../../Settings/localization'
import Routes from '../../Routes/Routes'
import Input from '../../Components/Input/Input'

import { useRef, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { new_password } from '../../Services/auth'

function NewPassword() {
    const inputPassword = useRef(null)
    const inputRepassword = useRef(null)

    const { id } = useParams()

    const navigate = useNavigate()
    const [ error, setErrorState ] = useState('')

    function submit() {
        new_password(inputPassword.current.value, inputRepassword.current.value, id, () => {
            navigate(Routes.signin)
        }, setErrorState)
    }

    return (
        <div className="auth-container">
            <h1>{loc._auth.reset_title}</h1>

            <p className='error'>{loc.get(error, 'auth')}</p>

            <Input 
                name='password'
                _ref={inputPassword}
                type='password'
                label={loc._auth.new_password}
            />

            <Input 
                name='repassword'
                _ref={inputRepassword}
                type='password'
                label={loc._auth.repassword}
            />

            <div className='auth-buttons'>
                <button id='btn-reset' onClick={submit}>{loc._auth.reset_title}</button>
                <Link to={Routes.signin}>
                    <button id='btn-cancel'>{loc._auth.cancel}</button>
                </Link>
            </div>
        </div>
    )
}

export default NewPassword