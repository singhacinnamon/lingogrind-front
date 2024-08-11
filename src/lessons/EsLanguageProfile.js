import Lesson from "../Lesson.js"
import React from 'react';
import spanishMap from "../images/spanish-map.png"
import popote from "../images/popote.png"

function EsLanguageProfile(props) {
    return (
        <Lesson title="Language Profile: Spanish" langCode="es">
            <p className="lp">¡Hola! Spanish, otherwise known as Español or Castellano, is the 4th most spoken language in the world, 
            with around 560 million speakers. While it originates in Spain, it is the official language of 21 countries 
            mostly located in the Americas, such as Mexico and Argentina.
            While the United States doesn't have an official language, Spanish is widely used with around 16% of the population (53 million) 
            proficient in the language. In fact, there are more Spanish speakers in the US than in Spain!</p><br/>

            <img src={ spanishMap } className='spanishMap' alt='Spanish Map' />
            <p className="note-content">Countries with Spanish as an Official Language from worldatlas.com</p><br/>

            <h2>Related languages and Varieties</h2>
            <p className="lp">Spanish is a member of the Romance branch of the Indo-European language family, meaning that it is 
            descended from Latin. As a result, it shares many similarities with languages such as Portuguese, Italian, and French. 
            English speakers will also recognize many words due to the huge amount of French influence present in English. Spanish 
            also has a large number of words with Arabic origins, due to Arabs inhabiting much of Spain for around 700 years, 
            ending in the late 15th century. </p><br/>

            <p className="lp">Being such a widely spoken language, it comes as no surprise that Spanish also boasts a large number 
            of varieties. The largest split is between European Spanish (from Spain) and Latin American Spanish. The grammar and 
            pronunciation are somewhat different and many words take on different meanings. In Latin America there are also many regional 
            accents and slangs. Despite this, Spanish speakers from anywhere can generally understand each other without issue. </p><br/>

            <img src={ popote } className='popote' alt='Words for Straw' /><br/>
            <p className="note-content">Different words for "straw" by region from Wikipedia</p>
            <br/>
            <h2>Features of Spanish</h2>
            <h4>Sentence Structure</h4>
            <p className="lp">Like English, Spanish sentences generally use an SVO (Subject, Verb, Object) structure, where the subject is the 
                doer of the action, the verb is the action itself, and the object or direct object are optional and represent the receiver of the action. 
                However, this ordering is not strict and the subject is often omitted when the context allows for it. </p><br/>

            <h4>Grammatical Gender</h4>
            <p className="lp">In Spanish, all nouns have a gender: either male or female. That includes everything from "man"(masculine) and "table"(feminine) to 
                "comment"(masculine) and "philosophy"(feminine). These genders are associated with individual words and are chosen seemingly at random. They are also essential 
                to correct Spanish grammar. Don't worry though, you can usually figure out the gender of a noun based on the ending of the word. </p><br/>

            <h4>Inflection</h4>
            <p className="lp">Inflection is the process of modifying a word to add extra meaning to it. For example, compare English "push" and "pushed". 
                By adding -ed to the end of the word, we added the meaning that the action occurred in the past. Spanish uses inflection for verbs, also called conjugation, 
                as well as for adjectives, nouns and articles. It makes especially heavy use of conjugation(verb inflection) to describe things like who does an action (person), 
                when an action occurs (tense), and whether a sentence is a command or merely a statement. </p>
        </Lesson>
    )
}

export default EsLanguageProfile;