import { useNavigate } from 'react-router-dom';
import '../css/OptionCard.css'

type Props = {
    name: string;
    path: string;
    imgSrc: string;
};

const OptionCard = ({ name, path, imgSrc }: Props) => {
    const nav = useNavigate();
    return (
        <div className="option-card__container" onClick={() => nav('/home' + path)}>
            <img src={imgSrc} alt={`${name} icon`} className="option-card__icon" />
            <span className="option-card__name">{name}</span>
        </div>
    );
};

export default OptionCard;
