import { loc } from "../../Settings/localization"
import Routes from "../../Routes/Routes"
import Input from "../../Components/Input/Input"

import { useRef } from "react"
import { Link } from "react-router-dom"

function Reset() {
    const inputEmail = useRef(null)

    return (
        <div className="auth-container">
            <h1>{loc.auth.reset_title}</h1>
            <Input 
                name='email'
                _ref={inputEmail}
                type='email'
                label={loc.auth.email}
            />

            <button>{loc.auth.send}</button>
            <Link to={Routes.signin}>
                <button>{loc.auth.signin}</button>
            </Link>
        </div>
    )
}

export default Reset