import React from 'react';
import '../../styles/Section.css'

export default function Resume() {
    return (
        <div className='section resumePage'>
            <h1>Resume</h1>
            <h3>Front-End Proficiencies</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            <h3>Back-End Proficiencies</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                </ul>
        </div>
    );
}

  