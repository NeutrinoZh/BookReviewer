import { loc } from "../../Settings/localization"

const Page404 = () => (
    <div className="page-404">
        <h1>{loc._page404.title}</h1>
        <p>{loc._page404.text}</p>
    </div>
)

export default Page404