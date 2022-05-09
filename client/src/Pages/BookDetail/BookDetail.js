import Input from '../../Components/Input/Input'
import Comment from '../../Components/Comment/Comment';
import { loc } from '../../Settings/localization';
import Routes from '../../Routes/Routes';
import { Link, useNavigate, useParams } from 'react-router-dom';

import store from "../../Redux/store"
import { getElementByID } from '../../Redux/actionMaker.js'
import { deleteBookServie, likeBookService } from '../../Services/book';

function BookDetail() {
    const { id } = useParams()
    const book = getElementByID(store.getState().books, id);
    const navigate = useNavigate()

    function deleteBook() {
        deleteBookServie(id, () => {
            navigate(Routes.home)
        })
    }

    function likeBook() {
        likeBookService(id, () => {
            console.log("LIKE SUCCESS")
        })        
    }

    return (
        <div className='book-detail'>
            <div className="book-detail-header">
                <img src={book.image}></img>
                <div>
                    <h1>{book.title}</h1>
                    <p>
                        {book.text}
                    </p>
                    <i>Автор: {book.user}</i>
                </div>
            </div>

            <p className='book-detail-num-favorite'>31 {loc._book_detail.num_favorite}</p>

            <div className="book-detail-buttons">
                { book.user == store.getState().user.name ? 
                    <>
                        <button onClick={deleteBook}>{loc._book_detail.remove}</button>    
                        <Link className='a-btn' to={Routes.edit_book.replace(':book', '0')}>
                            <button>{loc._book_detail.edit}</button>
                        </Link>
                    </>
                : "" }
                <button onClick={likeBook}>{loc._book_detail.favorite}</button>
            </div>

            <div className="book-detail-input">
                <Input/>

                <button>{loc._book_detail.send}</button>
            </div>

            <div className='book-detail-comments'>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </div>
    )
}

export default BookDetail;