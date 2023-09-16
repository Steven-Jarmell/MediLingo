import React from 'react';
import pittImage from '../assets/pittplusme.svg';
import nihImage from '../assets/nihclinicaltrials.png';
import rmImage from '../assets/rm.svg';
import '../css/Research.css';

const Research: React.FC = () => {
    return (
        <div className="landing-container">
            <div className="landing-container__left">
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
        </div>
    );
};

export default Research;
