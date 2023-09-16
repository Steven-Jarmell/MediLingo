import { useNavigate } from 'react-router-dom';
import '../css/OptionCard.css'

type Props = {
    name: string;
    path: string;
};

const OptionCard = ({ name, path }: Props) => {
    const nav = useNavigate()
    return (
        <div className="option-card__container" onClick={() => nav('/home/path' + path)}>
            <span className="option-card__name">{name}</span>
        </div>
    );
};

export default OptionCard;
