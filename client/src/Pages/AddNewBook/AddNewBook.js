import { useRef, useContext } from "react"
import Input from "../../Components/Input/Input"
import TextArea from "../../Components/Input/TextArea"
import { loc } from "../../Settings/localization"

import { addBook } from "../../Redux/actionMaker"
import ReduxContext from "../../Redux/reduxContext"
import { useNavigate } from "react-router-dom"
import Routes from "../../Routes/Routes"

function AddNewBook() {
    const store = useContext(ReduxContext)

    const title = useRef(null)
    const image = useRef(null)
    const text = useRef(null)

    const navigate = useNavigate()

    function submit() {
        store.dispatch( addBook({
            title: title.current.value,
            text: text.current.value,
            image: image.current.value
        }) )

        navigate(Routes.home)
    }

    return (
        <div className="add-new-book-form">
            <h1>{loc.add_new_book_form.title}</h1>

            <Input
                name='title'
                _ref={title}
                label={loc.add_new_book_form.title_book}
            />

            <Input
                type='file'
                name='image'
                _ref={image}
                label={loc.add_new_book_form.image}
            />

            <TextArea
                name='text'
                _ref={text}
                label={loc.add_new_book_form.text}                
            />

            <button onClick={submit}>{loc.add_new_book_form.add}</button>
        </div>
    )
}

export default AddNewBook