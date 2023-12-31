import LessonList from "./LessonList";

function Th(props) {
    return (
        <>
        <center>
            <h1 className="ctr title">Thai Lessons</h1>
            <LessonList lang="th"></LessonList>
        </center>
        </>
    )
}

export default Th;