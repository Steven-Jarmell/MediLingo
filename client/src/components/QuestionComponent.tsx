import { useState } from "react"

type QuestionProps = {
    question: string
    openEnded: boolean
    category: string
    options: string[]
    correctOptions: string[]
}

const Question = ({
  question,
  options,
  correctOptions,
}: QuestionProps) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const checkAnswer = (option: string) => {
    if (correctOptions.includes(option)) {
      setShowAnswer(true);
    } else {
      setShowAnswer(false);
    }
  };

  return (
    <div>
      <div className="rounded w-full h-fit border-spacing-3 text-center">
        {question}
      </div>
      <div>
        {options.map((option, index) => (
          <button
            key={index}
            className="text-center w-full h-fit border-spacing-3"
            onClick={() => checkAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      {showAnswer && (
        <div className="rounded w-full h-fit border-spacing-3 text-center">
          {correctOptions.map((answer, index) => (
            <div
              id="answer"
              key={index}
              className="text-center w-full h-fit border-spacing-3"
            >
              {answer}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Question