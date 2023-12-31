import { Link } from "react-router-dom"
import spanish from './images/spanish-flag.png'
import thai from './images/thai-flag.png'

function LangCardSet() {
    let langs = [{name:"Thai", abbr:"th", pic:thai}, {name:"Spanish", abbr:"es", pic:spanish}]; //TODO Move to homepage and pass as prop
    return (
        <>
        { langs.map(lang => (
            <Link to={ lang.abbr }>
                <div className="card" id="langcard">
                    <img className="card-img-top" src={ lang.pic } alt="Card image cap" />
                    <div className="card-body">
                        <center><h2>{ lang.name }</h2></center>
                    </div>
                </div>
            </Link>)) }
        </>
    )
}

export default LangCardSet;