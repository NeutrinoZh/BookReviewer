import Input from '../../Components/Input/Input'
import Comment from '../../Components/Comment/Comment';
import { loc } from '../../Settings/localization';
import Routes from '../../Routes/Routes';
import { Link } from 'react-router-dom';

function BookDetail() {
    return (
        <div className='book-detail'>
            <div className="book-detail-header">
                <img src="../book.jpg"></img>
                <div>
                    <h1>Відьмак</h1>
                    <p>
                        Одна из лучших фэнтези-саг за всю историю существования жанра.
                        Оригинальное, масштабное эпическое произведение, одновременно и свободное от
                        влияния извне, и связанное с классической мифологической, легендарной и
                        сказовой традицией. Шедевр не только писательского мастерства
                        Анджея Сапковского, но и переводческого искусства Евгения Павловича 
                        Вайсброта. Бесценный подарок и для поклонника прекрасной фантастики, и для ценителя
                        просто хорошей литературы. Перед читателем буквально оживает необычный,
                        прекрасный и жестокий мир литературной легенда, в котором обитают эльфы и гномы,
                        оборотни, вампиры и «низушки»-хоббиты, драконы и монстры,
                        - но прежде всего люди. Очень близкие нам, понятные и человечные люди
                        - такие как мастер меча ведьмак Геральт, его друг, беспутный менестрель
                        Лютик, его возлюбленная, прекрасная чародейка Йеннифэр, и приемная
                        дочь - безрассудно отважная юная Цири... В нашей библиотеке вы можете
                        бесплатно почитать книгу « Ведьмак ». Чтобы читать онлайн книгу « Ведьмак »
                        перейдите по указанной ссылке. Приятного Вам чтения.
                    </p>
                </div>
            </div>

            <p className='book-detail-num-favorite'>31 {loc._book_detail.num_favorite}</p>

            <div className="book-detail-buttons">
                <button>{loc._book_detail.remove}</button>
                <Link className='a-btn' to={Routes.edit_book.replace(':book', '0')}>
                    <button>{loc._book_detail.edit}</button>
                </Link>
                <button>{loc._book_detail.favorite}</button>
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