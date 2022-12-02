import React from 'react';
import '../../styles/Section.css'
import { motion, AnimatePresence } from "framer-motion"

export default function Contact() {
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
        <div className='section contactPage'>
            <h1>Contact Page</h1>
            <div className='listContainer'>
                <ul class="list-group">
                    <li class="list-group-item">Email: ParkerFGay@gmail.com</li>
                    <li class="list-group-item">Phone: 407-505-9266</li>
                    <li class="list-group-item">Github: <a href='https://github.com/ParksFG'>ParksFG</a></li>
                </ul>
            </div>
        </div>
        </motion.div>
        </AnimatePresence>
    );
}

