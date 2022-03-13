import { loc } from "../../Settings/localization"
import Card from "../../Components/Card/Card"
import Routes from "../../Routes/Routes"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"

function Profile() {
    const user = useSelector(store => store.user)

    return (
        <div>
            <div className="profile-container">
                <div className="profile-header">
                    <img src="../profile-avatar.png"></img>
                    
                    <div className="profile-info">
                        <h1>{user.name}</h1>
                        <h3>{user.followers} {loc._profile.followers}</h3>
                        <button>{loc._profile.follow}</button>
                        <Link to={Routes.edit_profile}>
                            <button>{loc._profile.edit}</button>
                        </Link>
                    </div>

                    <div className="profile-stats">
                        <h3>{user.num_books} {loc._profile.books}</h3>
                        <h3>{user.num_following} {loc._profile.following}</h3>
                        <h3>{user.num_comments} {loc._profile.comments}</h3>
                        <h3>{user.num_favorite} {loc._profile.favorites}</h3>
                    </div>
                </div>

                <div className="profile-body">
                    <p>
                        {user.aboutMe}
                    </p>
                </div>
            </div>

            <Link to={Routes.add_new_book} className="add-new-book">
                <button>{loc._profile.add_new_book}</button>
            </Link>

            <div className="card-containter">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    )
}

export default Profile