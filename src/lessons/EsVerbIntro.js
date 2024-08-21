import Lesson from "../Lesson.js"
import React from 'react';

function EsVerbIntro({ globUser }) {
    return (
        <Lesson title="Intro to Verbs: Infinitive and Present Indicative" langCode="es" file="EsVerbIntro" globUser={ globUser }>
            <p className="lp">Welcome to the wonderful world of conjugations! Remember, conjugation is just a fancy word 
                for modifying a verb to give it a different meaning. Today’s goal is to learn the present indicative form 
                in Spanish. In English that would be a sentence like “I run” or “It eats”. But before we jump into that, 
                let’s cover the three categories of verbs in Spanish. </p><br/>
            
            <h2>Infinitive Form: -ar, -er, and -ir Verbs</h2>
            <p className="lp">In English the infinitive form is the base form of a verb, such as “run”, “walk”, or “eat” 
                and optionally the word “to” may be placed in front of it. In Spanish, the infinitive form is similarly 
                fundamental to the language. All other conjugations are formed by modifying it. 
            </p><br/>

            <p className="note-content">All these verb forms are a mouthful! Focus more on how they’re used instead of 
                what they’re called. 
            </p><br/>

            <p className="lp">All infinitive forms of verbs end in -ar, -er, or -ir. Depending on which ending an infinitive has, 
                it is called an -ar verb, and -er verb, or an -ir verb. Simple right? Let’s see a few examples. 
            </p><br/>
            <div className="thirds-grid">
                <div className="round-light-yellow second-in-grid">
                    <table className='table multiline-table'>
                        <tr>
                            <th>Word</th>
                            <th>Meaning</th>
                        </tr>
                        <tr>
                            <td>caminar</td>
                            <td>to walk</td>
                        </tr>
                        <tr>
                            <td>comer</td>
                            <td>to eat</td>
                        </tr>
                        <tr>
                            <td>vivir</td>
                            <td>to live</td>
                        </tr> 
                    </table>
                </div>
            </div>
            <p className="note-content">Always translate Spanish infinitives with a “to” in front of the base verb! 
                It makes translation much smoother. 
            </p><br/>

            <p className="lp">Each verb group has its own version of each conjugation. Don’t panic though. -er and -ir conjugations 
                are almost exactly the same. All conjugations also have similar features across groups. In this lesson, we’ll only 
                cover -ar verbs. 
            </p><br/>

            <h2>Present Indicative Conjugations for -ar Verbs</h2>

            <p className="lp">The first thing to know about Spanish verb conjugations is that they change depending on who or what is doing 
                the verb (the subject). That’s why it was helpful for us to learn pronouns in the last lesson. The second thing to know is that 
                for almost all conjugations, the first step is to remove the -ar, -er, or -ir. What you replace it with depends on 
                the conjugation and who’s doing the action relative to the speaker. Here’s the chart for present indicative -ar verbs. 
            </p><br/>

            <div className="side-by-side-split">
                <div className="round-light-yellow second-in-grid">
                    <br/>
                    <h4>Singular</h4>
                    <table className="side-by-side-table table">
                        <tr>
                            <th>Subject</th>
                            <th>Replace &#8209;ar with</th>
                        </tr>
                        <tr>
                            <td>1st person (I, yo)</td>
                            <td>-o</td>
                        </tr>
                        <tr>
                            <td>2nd person (you, tú)</td>
                            <td>-as</td>
                        </tr>
                        <tr>
                            <td>3rd person (he/she/it, él/ella/usted)</td>
                            <td>-a</td>
                        </tr>
                    </table>
                    </div>
                    <div className="round-light-yellow">
                        <br/>
                        <h4>Plural</h4>
                        <table className="side-by-side-table table">
                            <tr>
                                <th>Subject</th>
                                <th>Replace &#8209;ar with</th>
                            </tr>
                            <tr>
                                <td>1st person (we, nosotros)</td>
                                <td>-amos</td>
                            </tr>
                            <tr>
                                <td>2nd person (you guys, ustedes)</td>
                                <td>-an</td>
                            </tr>
                            <tr>
                                <td>3rd person (they, ellos/ellas)</td>
                                <td>-an</td>
                            </tr>
                        </table>
                </div>
            </div>

            <p className="note-content">
                Remember that usted and ustedes use 3rd person conjugations!
            </p><br/>

            <p className="lp">
                Let's see what these conjugations look like applied to <b>caminar</b>.
            </p>

            <h4>Caminar</h4>
            <div className="side-by-side-split">
                <div className="round-light-yellow second-in-grid">
                    <table className="side-by-side-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Yo camino.</td>
                            <td>I walk.</td>
                        </tr>
                        <tr>
                            <td>Tú caminas.</td>
                            <td>You walk.</td>
                        </tr>
                        <tr>
                            <td>Ella camina.</td>
                            <td>She walks.</td>
                        </tr>
                    </table>
                </div>
                <div className="round-light-yellow">
                    <table className="side-by-side-table table">
                    <th>Phrase</th>
                    <th>Translation</th>
                        <tr>
                            <td>Nosotros caminamos.</td>
                            <td>We walk.</td>
                        </tr>
                        <tr>
                            <td>Ustedes caminan.</td>
                            <td>You guys walk.</td>
                        </tr>
                        <tr>
                            <td>Ellos caminan.</td>
                            <td>They walk.</td>
                        </tr>
                    </table>
                </div>
            </div><br/><br/>
            <p className="lp">
                Here are some more -ar verbs to practice with!
            </p><br/>

            <div className="thirds-grid">
                <div className="second-in-grid round-light-yellow">
                    <h2>Vocabulary</h2>
                    <table className='table'>
                        <tr>
                            <th>Word</th>
                            <th>Meaning</th>
                        </tr>
                        <tr>
                            <td>hablar</td>
                            <td>to talk/speak</td>
                        </tr>
                        <tr>
                            <td>mirar</td>
                            <td>to look/watch</td>
                        </tr>
                        <tr>
                            <td>usar</td>
                            <td>to use</td>
                        </tr>
                        <tr>
                            <td>comprar</td>
                            <td>to buy</td>
                        </tr>
                    </table><br/>
                </div>
            </div><br/><br/>

            <p className="lp">
            Here are those verbs conjugated, just to help you get the hang of this. Also, <b>you can add a 
            direct object (receives the action) to a sentence by simply placing it after the verb! </b>
            </p>


            <h4>Hablar</h4>
            <div className="side-by-side-split">
                <div className="round-light-yellow second-in-grid">
                    <table className="side-by-side-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Yo hablo Español.</td>
                            <td>I speak Spanish.</td>
                        </tr>
                        <tr>
                            <td>Tú hablas</td>
                            <td>You talk/speak</td>
                        </tr>
                        <tr>
                            <td>Shakira habla Español.</td>
                            <td>Shakira speaks Spanish.</td>
                        </tr>
                    </table>
                </div>
                <div className="round-light-yellow">
                    <table className="side-by-side-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Nosotros hablamos Inglés</td>
                            <td>We speak English</td>
                        </tr>
                        <tr>
                            <td>Ustedes hablan Español.</td>
                            <td>You guys speak Spanish.</td>
                        </tr>
                        <tr>
                            <td>Ellas hablan</td>
                            <td>They talk/speak</td>
                        </tr>
                    </table>
                </div>
            </div><br/><br/>


            <p className="lp">
            There is an exception to the direct object rule though. <b>If the direct object is a specific 
            person, you need to add the word “a” in front. </b>Adding this when referring to an animal usually 
            implies an emotional connection to it. You might use it with a pet, for example. "a" generally 
            translates to "to", but this is a special case where it doesn't really add meaning. 
            </p><br/>


            <h4>Mirar</h4>
            <div className="side-by-side-split">
                <div className="round-light-yellow second-in-grid">
                    <table className="side-by-side-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Yo miro a Miguel.</td>
                            <td>I look at Miguel.</td>
                        </tr>
                        <tr>
                            <td>Tú miras a Messi</td>
                            <td>You watch Messi</td>
                        </tr>
                        <tr>
                            <td>Él mira</td>
                            <td>He watches</td>
                        </tr>
                    </table>
                </div>
                <div className="round-light-yellow">
                    <table className="-by-sideside-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Nosotros miramos</td>
                            <td>We look</td>
                        </tr>
                        <tr>
                            <td>Ustedes miran</td>
                            <td>You guys look</td>
                        </tr>
                        <tr>
                            <td>Ellos miran Youtube</td>
                            <td>They watch Youtube</td>
                        </tr>
                    </table>
                </div>
            </div><br/><br/>


            <p className="lp">
            To make a sentence into a yes/no question, simply say it with an inquisitive tone, i.e. your 
            tone should rise at the end of the sentence. Just like asking questions in English!
            </p>


            <h4>Usar</h4>
            <div className="side-by-side-split">
                <div className="round-light-yellow second-in-grid">
                    <table className="side-by-side-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Yo uso</td>
                            <td>I use</td>
                        </tr>
                        <tr>
                            <td>¿Tú usas Whatsapp?</td>
                            <td>Do you use Whatsapp?</td>
                        </tr>
                        <tr>
                            <td>¿Usted usa NordVPN?</td>
                            <td>Do you use NordVPN?</td>
                        </tr>
                    </table>
                </div>
                <div className="round-light-yellow">
                    <table className="-by-sideside-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Nosotros usamos</td>
                            <td>We use</td>
                        </tr>
                        <tr>
                            <td>¿Ustedes usan Google?</td>
                            <td>Do you guys use Google?</td>
                        </tr>
                        <tr>
                            <td>¡Ellos usan tortillas!</td>
                            <td>They use tortillas!</td>
                        </tr>
                    </table>
                </div>
            </div>

            <p className="note-content">
            Question marks and exclamation points have upside down versions that go at the start of the 
            sentence, but in informal communication they usually just put them at the end like in English.
            </p><br/><br/>

            <h4>Comprar</h4>
            <div className="side-by-side-split">
                <div className="round-light-yellow second-in-grid">
                    <table className="side-by-side-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Yo compro quesadillas.</td>
                            <td>I buy quesadillas.</td>
                        </tr>
                        <tr>
                            <td>¿Tú compras Lamborghinis?</td>
                            <td>Do you buy Lamborghinis?</td>
                        </tr>
                        <tr>
                            <td>¡Juan compra tacos!</td>
                            <td>Juan buys tacos!</td>
                        </tr>
                    </table>
                </div>
                <div className="round-light-yellow">
                    <table className="-by-sideside-table table">
                        <th>Phrase</th>
                        <th>Translation</th>
                        <tr>
                            <td>Nosotros compramos.</td>
                            <td>We buy.</td>
                        </tr>
                        <tr>
                            <td>Ustedes compran tortillas.</td>
                            <td>You guys buy tortillas.</td>
                        </tr>
                        <tr>
                            <td>Ellos compran. </td>
                            <td>They buy.</td>
                        </tr>
                    </table>
                </div>
            </div>
        </Lesson>
    )
}

export default EsVerbIntro;