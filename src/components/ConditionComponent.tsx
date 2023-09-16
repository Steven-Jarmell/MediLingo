type Props = {
    title: string
    onClick: any
}

const Condition = ({ title, onClick }: Props) => {
    return (
        <button 
            onClick = { onClick } 
            className="bg-white hover:bg-blue-300 w-20 h-20 rounded-sm">
            <h1 className="font-bold"> 
                { title } 
                </h1>
        </button>
    );
}

export default Condition