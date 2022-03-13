import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/actionMaker.js';
import Routes from '../../Routes/Routes.js';
import { loc } from '../../Settings/localization.js'
import store from '../../Redux/store.js';
import { useSelector } from 'react-redux'

function Navigation() {
    const isAuth = useSelector(store => store.user.name != undefined)

    function handler_logout() {
        store.dispatch(logout())
    }

    return (
        <ul className="user-nav">
            <li><Link to={Routes.home}>{loc.home}</Link></li>
            { isAuth &&  <li><Link to={Routes.profile}>{loc.profile}</Link></li> }
            <li><Link to={Routes.about}>{loc.about}</Link></li>
            
            {
                isAuth ?
                    <a onClick={handler_logout}><li>{loc.logout}</li></a>  :
                    <li><Link to={Routes.signin}>{loc._auth.signin_title}</Link></li>
            }
        </ul>
    )
}

export default Navigation;