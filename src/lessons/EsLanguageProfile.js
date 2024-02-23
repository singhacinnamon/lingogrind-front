import Lesson from "../Lesson.js"
import React from 'react';
import spanishMap from "../images/spanish-map.png"
import popote from "../images/popote.png"

function EsLanguageProfile(props) {
    return (
        <Lesson title="Language Profile: Spanish" langCode="es">
            <h3>Who Speaks Spanish?</h3>
            <p className="lp">¡Hola! Spanish, otherwise known as Español or Castellano, is the 4th most spoken language in the world, 
            with around 560 million speakers. While it originates in Spain, it is the official language of 21 countries 
            mostly located in the Americas, such as Mexico and Argentina.
            While the United States doesn't have an official language, Spanish is widely used with around 16% of the population (53 million) 
            proficient in the language. In fact, there are more Spanish speakers in the US than in Spain!</p><br/>

            <img src={ spanishMap } className='spanishMap' alt='' />
            <p className="note">Countries with Spanish as an Official Language from worldatlas.com</p><br/>

            <h3>Related languages and Varieties</h3>
            <p className="lp">Spanish is a member of the Romance branch of the Indo-European language family, meaning that it is 
            descended from Latin. As a result, it shares many similarities with languages such as Portuguese, Italian, and French. 
            English speakers will also recognize many words due to the huge amount of French influence present in English. Spanish 
            also has a large number of words with Arabic origins, due to Arabs inhabiting much of Spain for around 700 years, 
            ending in the late 15th century. </p><br/>

            <p className="lp">Being such a widely spoken language, it comes as no surprise that Spanish also boasts a large number 
            of varieties. The largest split is between European Spanish (from Spain) and Latin American Spanish. The grammar and 
            pronunciation are somewhat different and many words take on different meanings. In Latin America there are also many regional 
            accents and slangs. Despite this, Spanish speakers from anywhere can generally understand each other without issue. </p><br/>

            <img src={ popote } className='popote' alt='' /><br/>
            <p className="note">Different words for "straw" by region</p>
            <br/>

        </Lesson>
    )
}

export default EsLanguageProfile;