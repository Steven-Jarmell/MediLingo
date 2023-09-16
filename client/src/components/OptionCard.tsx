type Props = {
    name: string;
    path: string;
};

const OptionCard = ({ name, path }: Props) => {
    return (
        <div className="">
            <span>{name}</span>
        </div>
    );
};

export default OptionCard;
