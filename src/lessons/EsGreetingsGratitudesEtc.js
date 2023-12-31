import React from 'react';
import { Link } from "react-router-dom";

function EsGreetingsGratitudesEtc(props) {
    return (
        <>
        <div className='flex backdiv'>
            <Link to="/es" className='backarr'>
                <img src='../../../static/images/back.png' className='backarr' alt='' />
            </Link>
            <Link to="/es" className='backarr'>
                <h5 className='back'>Lessons</h5>
                </Link>

        </div>
        <h1 className='title ctr'>Greetings, Gratitudes, etc.</h1>
        <div className = 'lesson'>

            <p className='lp'>  Hello, thank you, sorry, excuse me! These words and phrases are difficult to label as a group, and yet they seem to belong together.
                They are fundamental elements of language, and often convey feelings and intentions more than distinct meanings. In any language, 
                they are a great place to start. So why don't we get started?
            </p><br/>
            <h3>Vocabulary</h3>
            <table className='table'>
                <tr>
                    <th>Word</th>
                    <th>Meaning</th>
                </tr>
                <tr>
                    <td>hola</td>
                    <td>hello</td>
                </tr>
                <tr>
                    <td>adiós</td>
                    <td>goodbye</td>
                </tr>
                <tr>
                    <td>gracias</td>
                    <td>thank you</td>
                </tr>
                <tr>
                    <td>de nada</td>
                    <td>you're welcome</td>
                </tr>
                <tr>
                    <td>lo siento</td>
                    <td>sorry</td>
                </tr>
                <tr>
                    <td>disculpe</td>
                    <td>excuse me</td>
                </tr>
                <tr>
                    <td>(con) permiso</td>
                    <td>with permission</td>
                </tr>
                <tr>
                    <td>perdón(ame)</td>
                    <td>forgive me</td>
                </tr>
            </table><br/>
            <p className='note-content'>parentheses are used here to indicate a common shortening of a full word/phrase</p><br/>

            <p className='lp'>  <b>Hola</b>, <b>adiós</b>, <b>gracias</b>, <b>de nada</b>, and <b>lo siento</b> are all used in pretty much the same way as their English counterparts. </p><br/>

            <p className='lp'>  <b>Disculpe</b> and <b>(con) permiso</b> are very similar, and can both be used to get people's attention. <b>Disculpe</b> can be used as a
            mild apology. <b>Permiso</b> is also often used to preface asking permission to do something.
            </p><br/>

            <p className='quote'>¿<b>Con permiso</b>, podría usar el baño?</p>
            <p className='quote'>With your permission, could I use the bathroom?</p><br/>

            <p className='lp'><b>Perdón</b> is similar to <b>lo siento</b> as both can be used to apologize, but <b>perdón</b> is a little less serious and
                maybe a little pushier because it directly asks for forgiveness. It's similar to saying "my bad" in English. 
            </p><br/>

            <p className='lp'>That concludes this lesson, but keep reading for some notes on the origins and meanings of these words!</p><br/>

            <h2>Language Insights</h2><br/>

            <p className='note-content'>These are not strictly necessary for learning the language, but I think they're fun to learn about and
             can help learners better understand the language and culture. </p><br/>

            <p className='lp'><b>Adiós</b> (goodbye) comes from the phrase "a Dios" meaning "to God". The idea is that when you part ways with someone, you
                express the hope that they will follow the path of God. This is the first of many words that hint at catholic influence on
                Spanish culture.
            </p><br/>
            <p className='lp'><b>Gracias</b> (thank you) literally translates to "graces" as in when you want to express gratitude to somebody, 
                you wish God's graces upon them. 
            </p><br/>
            <p className='lp'><b>De nada</b> (you're welcome) means "of/from nothing", though a smoother translation would be "it's nothing". You can see
                how this would come to express humility after an act of generosity. 
            </p><br/>
            <p className='lp'><b>Lo siento</b> (sorry) means "I feel it". What exactly is "it"? It depends on the situation but generally you could say "it"
                is shame or regret. 
            </p><br/>
            <p className='lp'><b>Disculpe</b> (excuse me) means "unguilt me" (I know that's not real English hush) dis- is a common prefix similar to un- in English
                and usually meaning that a process is happening in reverse. "Culpa" means guilt. Think culprit or culpable in English. Hence why
                it makes sense to think of this word as meaning "unguilt me". 
            </p>
        </div>
        </>
    )
};

export default EsGreetingsGratitudesEtc;