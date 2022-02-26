import Input from "../../Components/Input/Input"
import TextArea from "../../Components/Input/TextArea"
import { loc } from "../../Settings/localization"

function AddNewBook() {
    return (
        <div className="add-new-book-form">
            <h1>{loc.add_new_book_form.title}</h1>

            <Input
                name='title'
                label={loc.add_new_book_form.title_book}
            />

            <Input
                type='file'
                name='image'
                label={loc.add_new_book_form.image}
            />

            <TextArea
                name='text'
                label={loc.add_new_book_form.text}                
            />

            <button>{loc.add_new_book_form.add}</button>
        </div>
    )
}

export default AddNewBook