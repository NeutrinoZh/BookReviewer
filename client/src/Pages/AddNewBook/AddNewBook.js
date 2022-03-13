import { useRef, useContext, useState } from "react"
import Input from "../../Components/Input/Input"
import TextArea from "../../Components/Input/TextArea"
import { loc } from "../../Settings/localization"

import { useNavigate } from "react-router-dom"
import Routes from "../../Routes/Routes"
import { addBookService } from "../../Services/book"

function AddNewBook() {
    const [ error, setErrorState ] = useState('')

    const title = useRef(null)
    const image = useRef(null)
    const text = useRef(null)

    const navigate = useNavigate()
 
    function submit() {
        addBookService(title.current.value, image.current.files[0], text.current.value, () => {
            navigate(Routes.home)
        }, setErrorState)
    }

    return (
        <div className="add-new-book-form">
            <h1>{loc._add_new_book_form.title}</h1>

            <p className="error">{loc.get(error, 'add_new_book_form')}</p>

            <Input
                name='title'
                _ref={title}
                label={loc._add_new_book_form.title_book}
            />

            <Input
                type='file'
                name='image'
                _ref={image}
                label={loc._add_new_book_form.image}
            />

            <TextArea
                name='text'
                _ref={text}
                label={loc._add_new_book_form.text}                
            />

            <button onClick={submit}>{loc._add_new_book_form.add}</button>
        </div>
    )
}

export default AddNewBook