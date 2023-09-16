import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const questionTypes = ["General", "Allergic", "Non-Allergic"]

const LessonComponent = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);

    // When the page loads, fetch the questionsa
    useEffect(() => {
        const getQuestions = async () =>
            await fetch(`http://localhost:3000/questions`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setQuestions(data.filter(item => item.questionType === questionTypes[id]));
                });

        getQuestions();
    }, []);

    // Fetch the questions for the lesson with the given id

    return (
        <div>
            <h1>Lesson Page</h1>
            <p>{id}</p>
            {questions.map(question => (
                <p>{question.questionType}</p>
            ))}
        </div>
    );
};

export default LessonComponent;
