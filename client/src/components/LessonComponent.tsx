// @ts-nocheck

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LessonHeader from "./LessonHeader";
import Confetti from "react-confetti";

const questionTypes = ["General", "Allergic", "Non-Allergic", "Occupational", "Exercise-Induced"];

const LessonComponent = () => {
    const { id } = useParams();
    const [questions, setQuestions] = useState<string[]>([]);
    const [number, setNumber] = useState<number>(0);
    const [answer, setAnswer] = useState<string>("");
    const [isCorrect, setIsCorrect] = useState<boolean>(false);
    const [showIsCorrect, setShowIsCorrect] = useState<boolean>(false);
    const [showSummary, setShowSummary] = useState<boolean>(false);
    const [isCompleted, setIsCompleted] = useState<boolean>(false);
    const [currentTarget, setCurrentTarget] = useState();

    const width = window.innerWidth;
    const height = window.innerHeight;

    const nav = useNavigate();

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
                currentTarget?.classList.toggle(
                    "[background-color:var(--main-theme)]"
                );
                setCurrentTarget(null);
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
        // Get the lessons the user completed
        let lessonsCompleted = localStorage.getItem('lessons-completed')

        // If the user has completed lessons, get a list of lessons
        let lessonsCompletedList: string[] = []
        if (lessonsCompleted !== null) {
            lessonsCompletedList = lessonsCompleted.split(';')
        }

        // If this lesson is not in the id, add it and push to local storage
        if (!lessonsCompletedList.includes(id!)) {
            lessonsCompletedList.push(id!)
            const lessonsString = lessonsCompletedList.reduce((accumulator, next) => accumulator + (';' + next))
            localStorage.setItem('lessons-completed', lessonsString)
        }

        return (
            <div className="mt-8">
                <Confetti width={width} height={height} />
                <h1 className="text-center text-4xl">Congratulations!</h1>
                <p className="text-center text-4xl">
                    You have completed lesson {id}.
                </p>
                <button
                    onClick={() => nav("/home")}
                    className="text-2xl flex justify-center w-fit mt-6 [background-color:var(--main-theme)] hover:[background-color:var(--secondary-theme)] text-white font-semibold hover:text-white py-2 px-4 border [border-color:var(--main-theme)] hover:border-transparent rounded ml-auto mr-auto transition ease-in"
                >
                    Return to Paths
                </button>
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
                                  onClick={(e) => {
                                      console.log(e.target.innerText);
                                      currentTarget?.classList.toggle(
                                          "[background-color:var(--main-theme)]"
                                      );
                                      e.target.classList.toggle(
                                          "[background-color:var(--main-theme)]"
                                      );
                                      setCurrentTarget(e.target);
                                      setAnswer(e.target.innerText);
                                  }}
                                  className="flex justify-center mt-4 bg-white border hover:cursor-pointer [border-color:var(--main-theme)] w-fit px-8 py-2 rounded ml-auto mr-auto text-xl"
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
                {showSummary && (
                    <div className="flex-1 p-6">
                        {
                            <div>
                                <span className="text-3xl font-bold">
                                    Summary:
                                </span>
                                <p className="mt-4 text-2xl">
                                    {questions[number]?.summary}
                                </p>
                            </div>
                        }
                    </div>
                )}
            </div>
        </>
    );
};

export default LessonComponent;
