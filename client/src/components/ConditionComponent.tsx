type ConditionProps = {
    title: string
    onClick: any
}

const Condition = ({ title, onClick }: ConditionProps) => {
    return (
        <button 
            onClick = { onClick } 
            className="bg-white hover:bg-blue-300 w-10 h-20 rounded">
            <h1 className="font-bold"> 
                { title } 
                </h1>
        </button>
    );
}

export default Condition