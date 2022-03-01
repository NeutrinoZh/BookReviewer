import { Link } from "react-router-dom"
import Routes from "../../Routes/Routes"

const Card = ({ title, text, image }) => (
    <div className="card">
        <img src={image}></img>
        <div className="card-info">
            <h1>{title}</h1>
            <p>
                {text} 
            </p>
            <Link to={Routes.detailBook}>
                <button>Подробнее</button>
            </Link>
        </div>
    </div>
)

export default Card