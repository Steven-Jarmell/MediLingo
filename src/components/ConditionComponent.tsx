type ConditionProps = {
    title: string
    onClick: () => void
}

export const Condition: React.FC<ConditionProps> = ({ title, onClick }) => {
    <button 
        onClick = { onClick } 
        class="bg-white hover:bg-blue-300 w-20 h-20 rounded-sm">
        <h1 class="font-bold"> 
            { title } 
            </h1>
    </button>
}