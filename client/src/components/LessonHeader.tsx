type Props = {
    number: number;
    numQuestions: number;
};

const LessonHeader = ({ number, numQuestions }: Props) => {
    const completed = (number / numQuestions) * 100
    
    const containerStyles = {
        height: 20,
        width: "90%",
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50,
    };

    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: "#3FD0C9",
        transition: "width 1s ease-in-out",
        borderRadius: "inherit",
        textAlign: "right",
    };

    const labelStyles = {
        padding: 5,
        color: "white",
        fontWeight: "bold",
    };

    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}></span>
            </div>
        </div>
    );
};

export default LessonHeader;
