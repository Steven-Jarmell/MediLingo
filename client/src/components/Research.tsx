import React from 'react';
// Importing the image
import pittImage from '../assets/pittplusme.svg';

const Research = () => {
    return (
        <div>
            <h1>Participate in Asthma Research</h1>

            <section>
                <h2>Why Participate?</h2>
                <p>
                    Participating in asthma research is a chance for you to make a difference. Not only can 
                    research lead to advancements in treatments and a better understanding of asthma, but it can also 
                    pave the way for future generations to lead healthier lives.
                </p>
                <p>
                    By being a part of this effort, you can:
                </p>
                <ul>
                    <li>Help medical professionals understand asthma better.</li>
                    <li>Gain access to new treatments before they are widely available.</li>
                    <li>Contribute to the greater good and potentially improve asthma care for others.</li>
                </ul>
            </section>

            <section>
                <h2>Importance of Asthma Research</h2>
                <p>
                    Asthma research provides crucial insights into the root causes of asthma, its triggers, and 
                    potential ways to treat or even cure it. It is through continuous research that we've made 
                    significant strides in asthma management today. However, there's much more to be learned. Your 
                    participation can be a vital key to unlocking these mysteries.
                </p>
            </section>
            <section>
                <h2>Get Started</h2>
                <p>
                    Interested in being a beacon of hope for the asthma community? Joining is easier than you think! 
                    Below are some resources to help you get started:
                </p>
                <ul>
                    <li>
                        <a href="https://pittplusme.org/" target="_blank" rel="noopener noreferrer">
                            {/* Updated Pitt link to be a button with the image */}
                            <img className = "pitt-me" src={pittImage} />
                            <button style={{
                                backgroundImage: `url(${pittImage})`,
                                width: '200px',  // Adjust width as needed
                                height: '100px', // Adjust height as needed
                                backgroundSize: 'cover',
                                border: 'none',
                                cursor: 'pointer',
                                textAlign: 'center',
                                color: 'white',
                                fontSize: '18px',
                                fontWeight: 'bold'
                            }}>
                                Pitt+Me
                            </button>
                        </a>
                    </li>
                    <li><a href="https://research-link-2.com" target="_blank" rel="noopener noreferrer">Research Link 2</a></li>
                    <li><a href="https://research-link-3.com" target="_blank" rel="noopener noreferrer">Research Link 3</a></li>
                </ul>
            </section>
        </div>
    );
};

export default Research;

