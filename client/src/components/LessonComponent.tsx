import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LessonHeader from "./LessonHeader";

const questionTypes = ["General", "Allergic", "Non-Allergic", "Exercise"];

const LessonComponent = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState<number>(0);
    const [answer, setAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(false);
    const [showIsCorrect, setShowIsCorrect] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    // When the page loads, fetch the questions
    useEffect(() => {
        const getQuestions = async () => {
            await fetch(`http://localhost:3000/questions`)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setQuestions(
                        data.filter(
                            (item) => item.questionType === questionTypes[id]
                        )
                    );
                });
        };

        getQuestions();
    }, [id]);

    const checkAnswer = () => {
        if (showSummary) {
            if (number < questions.length - 1) {
                setNumber(number + 1);
                setAnswer("");
                setIsCorrect(false);
                setShowIsCorrect(false);
                setShowSummary(false);
            } else {
                setIsCompleted(true);
            }
        } else {
            if (questions[number]?.openEnded) {
                if (answer.length >= 0) {
                    setIsCorrect(true);
                    setShowIsCorrect(true);
                    setShowSummary(true);
                }
            } else {
                if (questions[number]?.correctOptions.includes(answer)) {
                    setIsCorrect(true);
                    setShowIsCorrect(true);
                    setShowSummary(true);
                } else {
                    setShowIsCorrect(true);
                    setIsCorrect(false);
                }
            }
        }
    };

    if (isCompleted) {
        return (
            <div>
                <h1>Congratulations!</h1>
                <p>You have completed lesson {id}.</p>
            </div>
        );
    }

    return (
        <>
            <LessonHeader number={number} numQuestions={questions.length} />
            <div className="flex">
                <div className="flex-1">
                    <p className="text-3xl text-center font-bold">
                        {questions[number]?.questionText}
                    </p>
                    {questions[number]?.openEnded === true ? (
                        <textarea
                            className="block p-2.5 w-[40vw] text-m text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-[var(--main-theme)] focus:border-[var(--main-theme)] resize-none ml-auto mr-auto mt-6"
                            placeholder="Write your thoughts here..."
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                    ) : null}
                    {questions[number]?.openEnded === false
                        ? questions[number]["options"].map((option, index) => (
                              <div
                                  key={index}
                                  onChange={(e) => setAnswer(e.target.value)}
                                  className="flex justify-center mt-4"
                              >
                                  {option}
                              </div>
                          ))
                        : null}

                    <button
                        onClick={checkAnswer}
                        className="text-2xl flex justify-center w-fit mt-6 [background-color:var(--main-theme)] hover:[background-color:var(--secondary-theme)] text-white font-semibold hover:text-white py-2 px-4 border [border-color:var(--main-theme)] hover:border-transparent rounded ml-auto mr-auto transition ease-in"
                    >
                        {showSummary ? "Next Question" : "Check Answer"}
                    </button>
                    {isCorrect !== null && (
                        <p className="text-center mt-8 text-2xl font-bold">
                            {showIsCorrect
                                ? isCorrect
                                    ? "Correct!"
                                    : "Incorrect. Please try again."
                                : null}
                        </p>
                    )}
                </div>
                {showSummary && <div className="flex-1 p-6">
                    {
                        <div>
                            <span className="text-3xl font-bold">Summary:</span>
                            <p className="mt-4 text-2xl">{questions[number]?.summary}</p>
                        </div>
                    }
                </div>}
            </div>
        </>
    );
};

export default LessonComponent;
