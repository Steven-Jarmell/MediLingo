import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const questionTypes = ["General", "Allergic", "Non-Allergic"]

const LessonComponent = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState<number>(0);
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [showSummary, setShowSummary] = useState(false);

    // When the page loads, fetch the questions
    useEffect(() => {
        const getQuestions = async () => {
            await fetch(`http://localhost:3000/questions`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setQuestions(data.filter(item => item.questionType === questionTypes[id]));
                });
        };

        getQuestions();
    }, [id]);

    const checkAnswer = () => {
        if (showSummary) {
            if (number < questions.length - 1) {
                setNumber(number + 1);
                setAnswer("");
                setIsCorrect(null);
                setShowSummary(false);
            }
        } else {
            if (questions[number]?.openEnded) {
                if (answer.length >= 50) {
                    setIsCorrect(true);
                    setShowSummary(true);
                }
            } else {
                if (questions[number]?.correctOptions.includes(answer)) {
                    setIsCorrect(true);
                    setShowSummary(true);
                } else {
                    setIsCorrect(false);
                }
            }
        }
    };

    return (
        <div>
            <h1>Lesson Page</h1>
            <p>{id}</p>
            <p>{questions[number]?.questionText}</p>
            <p>{number}</p>
            {questions[number]?.openEnded === true ? (
                <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} />
            ) : null}
            {questions[number]?.openEnded === false ? (
                questions[number]["options"].map((option, index) => (
                    <div key={index}>
                        <input
                            type="radio"
                            name="option"
                            value={option}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <label>{option}</label>
                    </div>
                ))
            ) : null}

            <button onClick={checkAnswer}>
                {showSummary ? "Next Question" : "Check Answer"}
            </button>
            {isCorrect !== null && (
                <p>{isCorrect ? "Correct!" : "Incorrect. Please try again."}</p>
            )}
            {showSummary && <p>{questions[number]?.summary}</p>}
        </div>
    );
};

export default LessonComponent;
