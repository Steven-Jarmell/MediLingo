import { useNavigate } from "react-router-dom";
import babyLion from "../assets/baby-lion.png";
import "../css/Landing.css";

const Landing = () => {
    const navigate = useNavigate()

    return (
        <div className="landing-container">
            <div className="landing-container__left">
                <h1 className="landing-title">MediLingo</h1>
                <p className="landing-message">
                    The free, fun, and effective way to learn about medical
                    conditions
                </p>
            </div>
            <div className="landing-container__right">
                <img className="landing-image" src={babyLion} />
                <div className="landing__buttons-container">
                    <button onClick={() => navigate('/sign-in')} className="landing-button landing-button__login">Login</button>
                    <button onClick={() => navigate('/sign-up')} className="landing-button landing-button__signup">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
