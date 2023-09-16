type QuestionProps = {
    question: string
    choices: string[]
    answer: string
}

const Question = ({ question, choices, answer }: QuestionProps) => {
    <div>
        <div className="w-full h-1/2 text-center font-bold">
            { question }
        </div>
        <div>
        
        </div>
    </div>
        
}

export default Question