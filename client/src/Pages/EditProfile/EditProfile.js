import Input from "../../Components/Input/Input";
import TextArea from "../../Components/Input/TextArea";
import { loc } from "../../Settings/localization";

function EditProfile() {
    return (
        <div className="edit-profile-form">
            <h1>{loc._edit_profile_form.title}</h1>

            <Input
                name='name'
                label={loc._edit_profile_form.name}
            />

            <Input
                type='file'
                name='avatar'
                label={loc._edit_profile_form.avatar}
            />

            <TextArea
                name='aboutMe'
                label={loc._edit_profile_form.about_me}
            />

            <button>{loc._edit_profile_form.confirm}</button>
        </div>
    )
}

export default EditProfile;