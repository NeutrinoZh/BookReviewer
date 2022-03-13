import { 
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom'
import { useSelector } from 'react-redux'

import SiteRoutes from './Routes'

import Home from '../Pages/Home/Home'
import Navigation from '../Components/Navigation/Navigation'
import Profile from '../Pages/Profile/Profile'
import AboutUs from '../Pages/AboutUs/AboutUs'

import SignIn from '../Pages/Auth/SignIn'
import Page404 from '../Pages/Errors/Page404'
import SignUp from '../Pages/Auth/SignUp'
import Reset from '../Pages/Auth/Reset'
import BookDetail from '../Pages/BookDetail/BookDetail'
import AddNewBook from '../Pages/AddNewBook/AddNewBook'
import EditProfile from '../Pages/EditProfile/EditProfile'
import NewPassword from '../Pages/Auth/NewPassword'

const Routers = () => {
    
    const user = useSelector(store => store.user)


    return (
        <BrowserRouter>
            <Navigation/>
            
            <Routes>
                <Route path={SiteRoutes.home} element={<Home/>}/>
                <Route path={SiteRoutes.about} element={<AboutUs/>}/>
                <Route path={SiteRoutes.signin} element={<SignIn/>}/>
                <Route path={SiteRoutes.signup} element={<SignUp/>}/>
                <Route path={SiteRoutes.reset_password} element={<Reset/>}/>
                <Route path={SiteRoutes.new_password} element={<NewPassword/>}/>
                <Route path={SiteRoutes.page404} element={<Page404/>}></Route>

                { user.name ? (
                    <>
                        <Route path={SiteRoutes.profile} element={<Profile/>}/>
                        <Route path={SiteRoutes.detailBook} element={<BookDetail/>}/>
                        <Route path={SiteRoutes.add_new_book} element={<AddNewBook/>}/>
                        <Route path={SiteRoutes.edit_profile} element={<EditProfile/>}/>
                        <Route path={SiteRoutes.edit_book} element={<AddNewBook/>}/>
                    </>
                ) : '' }
            </Routes>
        </BrowserRouter>
    )
}

export default Routers