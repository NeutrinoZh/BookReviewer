import { loc } from "../../Settings/localization"
import Card from "../../Components/Card/Card"
import Routes from "../../Routes/Routes"
import { Link } from "react-router-dom"

function Profile() {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-header">
                    <img src="../profile-avatar.png"></img>
                    
                    <div className="profile-info">
                        <h1>Evgeniy Tertychniy</h1>
                        <h3>31 {loc._profile.followers}</h3>
                        <button>{loc._profile.follow}</button>
                        <Link to={Routes.edit_profile}>
                            <button>{loc._profile.edit}</button>
                        </Link>
                    </div>

                    <div className="profile-stats">
                        <h3>17 {loc._profile.books}</h3>
                        <h3>11 {loc._profile.following}</h3>
                        <h3>81 {loc._profile.comments}</h3>
                        <h3>39 {loc._profile.favorites}</h3>
                    </div>
                </div>

                <div className="profile-body">
                    <p>
                        I'm studying at CHSBC. I have been programming since the age of 12. I like it so much. I also love fantasy: books, movies, cartoons, comics.
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