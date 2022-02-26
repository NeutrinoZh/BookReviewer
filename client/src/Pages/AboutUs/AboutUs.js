import { loc } from '../../Settings/localization.js'

function AboutUs() {
    return (
        <div className="about-us-container">
            <h1>{loc._about.title}</h1>

            <p>{loc._about.first_paragraph}</p>

            <br/>

            <p>{loc._about.second_paragraph}</p>
        </div>
    )
}

export default AboutUs