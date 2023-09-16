import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LessonHeader from "./LessonHeader";

const questionTypes = ["General", "Allergic", "Non-Allergic", "Exercise"]

const LessonComponent = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState<number>(0);

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
            <LessonHeader number={number} numQuestions={questions.length}/>
            <p className="text-center font-bold text-4xl">{questions[number]?.questionText}</p>
            {questions[number]?.openEnded === true ? <textarea></textarea> : null}
            {questions[number]?.openEnded === false ? questions[number]["options"].map(option => (<p>{option}</p>)) : null }
            
            <button onClick={() => setNumber(number + 1)}>Increment</button>
        </div>
    );
};

export default LessonComponent;
