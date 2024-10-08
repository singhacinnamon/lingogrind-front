import Lesson from "../Lesson.js"
import React from 'react';

function EsSubjectPronouns({ globUser }) {
    return (
        <Lesson title="Subject Pronouns" langCode="es" file="EsSubjectPronouns" globUser={ globUser }>
            <p className="lp">Diego had a long day at school, so when Diego got home Diego took a long nap. Sounds weird right?
            This sentence is in dire need of pronouns, the topic of this lesson.</p><br/>

            <p className="lp">Subject pronouns are used to replace the name of a person, place or thing and are some of the most common 
            words in any language. They are also useful when you don't know what something or somebody is called. </p><br/>

            
            <div className="thirds-grid">
                <div className="second-in-grid round-light-yellow">
                    <h2>Vocabulary</h2>
                    <table className='table multiline-table'>
                        <tr>
                            <th>Word</th>
                            <th>Meaning</th>
                            <th>Context</th>
                        </tr>
                        <tr>
                            <td>yo</td>
                            <td>I</td>
                            <td>1st person singular</td>
                        </tr>
                        <tr>
                            <td>nosotros</td>
                            <td>we</td>
                            <td>1st person plural</td>
                        </tr>
                        <tr>
                            <td>tú</td>
                            <td>you</td>
                            <td>2nd prsn sing.</td>
                        </tr>
                        <tr>
                            <td>usted</td>
                            <td>you (formal)</td>
                            <td>2nd prsn sing.</td>
                        </tr>
                        <tr>
                            <td>ustedes</td>
                            <td>you guys</td>
                            <td>2nd prsn plur.</td>
                        </tr>
                        <tr>
                            <td>él</td>
                            <td>he/it</td>
                            <td>3rd prsn sing.</td>
                        </tr>
                        <tr>
                            <td>ella</td>
                            <td>she/it</td>
                            <td>3rd prsn sing.</td>
                        </tr>
                        <tr>
                            <td>ellos</td>
                            <td>they (all male or mixed)</td>
                            <td>3rd prsn plur.</td>
                        </tr>
                        <tr>
                            <td>ellas</td>
                            <td>they (all female)</td>
                            <td>3rd prsn plur.</td>
                        </tr>
                    </table>
                </div>
            </div>
            <br/>

            <p className="lp">Please note that all of these pronouns are <i>subject</i> pronouns, they are used to indicate who/what
            is performing the action in a sentence. This lesson is somewhat of a stepping stone. In the next lesson we will
            learn some basic verbs and start putting simple sentences together. BUT BEFORE YOU GO there are a couple quirks I need to explain. </p><br/>

            <h2>Tú vs. Usted</h2>
            <p className="lp">As mentioned in the table, <b>usted</b> is the <i>formal</i> way to say "you". You should use it when speaking
            to people who are older than you, strangers, and people with a higher social standing such as an authority figure of some sort. 
            Tú is generally used in any other situation, most commonly with friends or with strangers your age in social settings. 
            There's a lot of gray area here and it's somewhat up to personal preference which you choose. The unfortunate part about 
            usted is that you have to <i>conjugate</i> verbs for it as if it were a 3rd person singular pronoun, which can be confusing. Don't worry about this now, 
            we'll go over conjugation in the next lesson. </p><br/>

            <h2>Ustedes</h2>
            <p className="lp">More nuance! Spanish can be thought of as having 2 standard varieties: Spanish (from Spain) and Latin American. 
            Throughout this guide I will be teaching Latin American Spanish for 2 reasons: 1. It's the variety that I'm most familiar with and 
            2. There are 574 million Spanish speakers in the world and Spain has a population of only 47 million (6% of them don't even speak Spanish). 
            That means over 90% of Spanish speakers worldwide use Latin American Spanish. Equatorial Guinea in Africa also speaks Spanish 
            and they're actually more similar to the Spanish variety but that's only around 1 million more speakers. 
            </p><br/>

            <p className="lp">Anyways, one of the key differences is that in Spain there are 2 ways to say "you guys". Vosotros for informal contexts 
            and <b>ustedes</b> for formal ones. Vosotros comes with its own set of verb conjugations (again 
            that will make more sense in the next lesson) so it's just another thing for learners to worry about. Luckily, we won't bother with it. 
            In Latin American Spanish, <b>ustedes</b> can be used for both formal and informal situations.</p><br/>

            <h2>It (Él/Ella)</h2>
            <p className="lp">You're probably wondering: </p>
            <p className="quote">Why are there 2 ways to say "it" and why are they the same as "he" and "she"?</p>
            <p className="lp">Think about when we use "it" in English. We use "it" when the thing in question either has no gender or we don't know
            its gender. As I mentioned in the language profile, every Spanish noun has a gender. So instead of saying "it", in Spanish you refer to the noun as "he" or "she" based on its gender. 
            For example, the word "shoe", zapato, is male so if "it" is referring to a shoe, you use <b>él</b>. The word "question", pregunta, is 
            female so if "it" refers to a question, then use <b>ella</b>. Don't worry about it too much now, that time will come a couple lessons down the road. </p><br/>

            <h2>Ellos vs. Ellas</h2>
            <p className="lp">Lastly, to say "they" in Spanish there are 2 options. Use <b>ellos</b> when the "they" in question contains at 
            least one male. Use <b>ellas</b> if "they" are all female. There is ongoing debate over the social implications of Spanish's gender system, 
            especially the tendency of male pronouns to "take over" in this way. </p>

        </Lesson>
    )
}

export default EsSubjectPronouns;