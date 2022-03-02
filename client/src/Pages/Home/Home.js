import { useContext, useEffect } from "react"
import Card from "../../Components/Card/Card"
import ReduxContext from "../../Redux/reduxContext"

function Home() {
    const store = useContext(ReduxContext)

    return (
        <div className="card-containter">
            {
                store.getState().books.map((book, key) => <Card key={key} {...book}/>)
            }
        </div>
    )
}

export default Home