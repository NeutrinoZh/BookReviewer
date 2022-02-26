import { Link } from "react-router-dom"
import Routes from "../../Routes/Routes"

const Card = () => (
    <div className="card">
        <img src="../book.jpg"></img>
        <div className="card-info">
            <h1>Відьмак</h1>
            <p>
                Одна из лучших фэнтези-саг за всю историю существования жанра.
                Оригинальное, масштабное эпическое произведение, одновременно и свободное 
            </p>
            
            <Link to={Routes.detailBook}>
                <button>Подробнее</button>
            </Link>
        </div>
    </div>
)

export default Card