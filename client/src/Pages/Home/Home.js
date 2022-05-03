import Card from "../../Components/Card/Card"
import store from "../../Redux/store"
import { loadBooksService } from "../../Services/book"

import { useEffect } from 'react'
import { useSelector } from "react-redux"
import { load_books } from "../../Redux/actionMaker"

function Home() {
    const books = useSelector(store => store.books)

    useEffect(() => {
        loadBooksService(books => 
            store.dispatch(load_books(books))
        )
    }, [])       

    return (
        <div className="card-containter">
            {
                books.map(book => <Card key={book._id} id={book._id} {...book}/>)
            }
        </div>
    )
}

export default Home