import LessonList from "./LessonList";

function Es(props) {
    let globUser=props.globUser
    return (
        <>
        <h1 className="title ctr">Spanish Lessons</h1>
        <LessonList lang="es" globUser={ globUser }></LessonList>
        </>
    )
}

export default Es;