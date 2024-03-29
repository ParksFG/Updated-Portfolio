import React from 'react';
import '../../styles/Section.css'
import { motion, AnimatePresence } from "framer-motion"

export default function Resume() {
    return (
        <AnimatePresence exitBeforeEnter>
        <motion.div
        key={React}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
            duration: 1
        }}
        variants={{
            initialState: {
                opacity: 0,
            },
            animateState: {
                opacity: 1,
            },
            exitState: {
            }
        }}>
        <div className='section resumePage'>
            <h1>Resume</h1>
            <h3>Front-End Proficiencies</h3>
                <ul class="list-group">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            <h3>Back-End Proficiencies</h3>
                <ul class="list-group">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                </ul>
        </div>
        </motion.div>
        </AnimatePresence>
    );
}

  