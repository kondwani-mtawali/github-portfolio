import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faGithub, faPython } from '@fortawesome/free-brands-svg-icons';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '/home/kondwani/github-portfolio/src/assets/styles/Expertise.scss';

const labelsFirst = [
    "Data Cleaning & Transformation",
    "Feature Scaling & Selection",
    "Data Visualization",
    "Regression & Predictive Modeling",
    "Decision Trees & Classification",
    "Model Evaluation & Tuning",
    "Machine Learning Fundamentals",
];

const labelsSecond = [
    "Pandas",
    "NumPy",
    "Scikit-Learn",
    "SK-Learn",
    "Seaborn",
    "Matplotlib",
    "Itertools",
    "Json",
    "Vite",
];

const labelsThird = [
    "Python",
    "Django",
    "JavaScript",
    "React",
    "Vite",
    "HTML/CSS",
    "GitHub",
    "Linux",
    "JSON",
    "React",
];

const labelsFourth = [
    "GitHub",
    "Linux",
    "JSON",
    "Java",
    "C/C++",
    "Assembly",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Technical Skills</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faBrain} size="3x" />
                        <h3>Data Science & Machine Learning</h3>
                        <p> </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Python Libraries</h3>
                        <p> </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsSecond.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Web Development & Software Engineering</h3>
                        <p> </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsThird.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                        <h3>Additional Tools, Systems, Languages</h3>
                        <p> </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFourth.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;