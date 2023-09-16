import babyLion from "../assets/baby-lion.png";
import "../css/Landing.css";

const onLoginClicked = () => {
    console.log(5);
};

const Landing = () => {
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
                    <button className="landing-button landing-button__login">Login</button>
                    <button className="landing-button landing-button__signup">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Landing;
