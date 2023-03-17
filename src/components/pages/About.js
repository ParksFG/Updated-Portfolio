import React from 'react';
import selfPortrait from '../../imgs/selfPortrait.png'
import '../../styles/Section.css'
import { motion, AnimatePresence } from "framer-motion"

export default function About() {
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
    <div className='section aboutPage'>
        <h1>About Me</h1>
        <div className='clearfix overflow-hidden'>
            <div className='row'>
                <div className='col-sm-4 col-md-4 col-lg-2'>
                    <img src={selfPortrait} className='rounded mx-auto d-block' alt='Self Portrait'></img>
                </div>
                <div className='col-sm-8 col-md-8 col-lg-10'>
                    <p className='text-center'>
                        My name is Parker Gay.  I'm a 23 year old web developer who's been playing with computers since the day I could walk.  When I was in the fourth grade, I went to a summer camp that taught me how to be a game developer, and ever since then I fell in love with creating in the digital world.  Throughout the time between fourth and eighth grade, I would spend my free time making websites and trying to figure out how a domain name actually worked.  Once I got into high school, I started creating websites for my, and my friends, YouTube channels.  After that, I went to college for mechanical engineering, but soon dropped out to start a company with a good friend I met during my time in college.  It was a small online business management company, which meant we ran their social media and created/maintained all sorts of websites, anything from a generic landing page to a fully operational web store.   After about 2 years, I decided I really want to dive deep into web development.  This led to me starting the UT @ Austin web development bootcamp.  During my time there, I learned all sorts of web technologies that I can't wait to put to good work.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
    </AnimatePresence>
  );
}

