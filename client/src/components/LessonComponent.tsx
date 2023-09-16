import { useParams } from "react-router-dom"

const LessonComponent = () => {
    const { id } = useParams()

    return (
        <div>
            <h1>Lesson Page</h1>
            <p>{id}</p>
        </div>
    )
}

export default LessonComponent