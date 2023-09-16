import React from 'react';
import pittImage from '../assets/pittplusme.svg';
import nihImage from '../assets/nihclinicaltrials.png';
import rmImage from '../assets/rm.svg';
import researchImage from '../assets/researchimage.png';
import '../css/Research.css';

const Research: React.FC = () => {
    return (
        <div className="landing-container">
            <div className="landing-container__left">
            <img src={researchImage} alt="Research" className="research-landing-image" />
                <h1 className="landing-title">Participate in Asthma Research</h1>
                <p className="landing-message">
                    Participating in asthma research is a chance for you to make a difference. Not only can 
                    research lead to advancements in treatments and a better understanding of asthma, but it can also 
                    pave the way for future generations to lead healthier lives.
                </p>
                <p className="landing-message">
                    By being a part of this effort, you can:
                </p>
                <ul>
                    <li>Help medical professionals understand asthma better.</li>
                    <li>Gain access to new treatments before they are widely available.</li>
                    <li>Contribute to the greater good and potentially improve asthma care for others.</li>
                </ul>
            </div>

            <div className="landing-container__right">
                <h2>Importance of Asthma Research</h2>
                <p>
                    Asthma research provides crucial insights into the root causes of asthma, its triggers, and 
                    potential ways to treat or even cure it. It is through continuous research that we've made 
                    significant strides in asthma management today. However, there's much more to be learned. Your 
                    participation can be a vital key to unlocking these mysteries.
                </p>

                <h2>Get Started</h2>
                <p>
                    Interested in being a beacon of hope for the asthma community? Joining is easier than you think! 
                    Below are some resources to help you get started:
                </p>
                <div className="landing__buttons-container">
                    <a href="https://pittplusme.org/" target="_blank" rel="noopener noreferrer">
                        <button className="landing-button pitt-me" style={{
                            backgroundImage: `url(${pittImage})`,
                        }}>
                        </button>
                    </a>
                    <a href="https://clinicaltrials.gov/" target="_blank" rel="noopener noreferrer">
                        <button className="landing-button nih" style={{
                            backgroundImage: `url(${nihImage})`,
                        }}>
                        </button>
                    </a>
                    <a href="https://www.researchmatch.org/" target="_blank" rel="noopener noreferrer">
                        <button className="landing-button research-match" style={{
                            backgroundImage: `url(${rmImage})`,
                        }}>
                        </button>
                    </a>
                </div>
            </div>

            <div className="landing-container__additional-resources">
                <h2>Additional Resources</h2>
                <p>
                    We encourage you to explore further and stay informed. Consider signing up for newsletters from 
                    reputable sources to receive the latest updates on asthma research and potential clinical trials 
                    you can participate in.
                </p>
                <div className="landing__newsletter-signup">
                    <input type="email" placeholder="Your email address" className="newsletter-input" />
                    <button className="newsletter-button">Sign Up</button>
                </div>
                
                <h3>Active Clinical Trials </h3>
                <p>Join today and help better yourself and others!</p>
                <ul className="landing__resource-links">
                    <li><a href="https://clinicaltrials.gov/study/NCT03228134?cond=Asthma&aggFilters=status:rec%20not&rank=3" target="_blank" rel="noopener noreferrer">Clinical Study on Treatment of Chronic Persistent Bronchial Asthma</a></li>
                    <li><a href="https://clinicaltrials.gov/study/NCT05632081?cond=Asthma&aggFilters=status:rec%20not&rank=4" target="_blank" rel="noopener noreferrer">A Study of Step-up in Bronchial Asthma as a New End Point (SURFE) (SURFE)</a></li>
                    <li><a href="https://clinicaltrials.gov/study/NCT05363202?cond=Asthma&aggFilters=status:rec%20not&rank=5" target="_blank" rel="noopener noreferrer">To Study Generic Fluticasone Propionate Inhalation Aerosol for the Treatment of Bronchial Asthma</a></li>

                </ul>
            </div>
        </div>
    );
};

export default Research;
