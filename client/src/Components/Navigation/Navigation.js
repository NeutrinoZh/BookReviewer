import { Link } from 'react-router-dom';
import Routes from '../../Routes/Routes.js';
import { loc } from '../../Settings/localization.js'

function Navigation() {
    return (
        <ul className="user-nav">
            <li><Link to={Routes.home}>{loc.home}</Link></li>
            <li><Link to={Routes.profile}>{loc.profile}</Link></li>
            <li><Link to={Routes.about}>{loc.about}</Link></li>
            <li><Link to={Routes.signin}>{loc.auth.signin_title}</Link></li>
        </ul>
    )
}

export default Navigation;