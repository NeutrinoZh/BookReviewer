import Card from "../../Components/Card/Card"
import store from "../../Redux/store"

function Home() {
    return (
        <div className="card-containter">
            {
                store.getState().books.map((book, key) => <Card key={key} {...book}/>)
            }
        </div>
    )
}

export default Home