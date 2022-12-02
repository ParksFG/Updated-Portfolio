import React from 'react';
import lechonksLarder from '../../imgs/lechonksLarder.png'
import peaceOfMind from '../../imgs/peaceOfMind.png'
import breweryMasters from '../../imgs/breweryMasters.png'
import JAATE from '../../imgs/JAATE.png'
import weatherDashboard from '../../imgs/weatherDashboard.png'
import techBlog from '../../imgs/techBlog.png'
import passwordGenerator from '../../imgs/passwordGenerator.png'
import ecommerceAPI from '../../imgs/ecommerceAPI.png'
import socialMediaAPI from '../../imgs/socialMediaAPI.png'
import { motion, AnimatePresence } from "framer-motion"

export default function Portfolio() {
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
        <div className='section portfolioPage'>
            <h1>Portfolio</h1>
            <h2>In Progress Projects</h2>
            <div className='container text-center'>
                <div className='row row-cols-2 g-5'>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/Lechonks-Larder'><img src={lechonksLarder} className='img-fluid' alt='Pokemon Card Collection Website'></img></a>
                        <p>Pokemon Card Collection Website</p>
                    </div>
                </div>
            </div>
            <h2>Large Scale Projects</h2>
            <div className='container text-center'>
                <div className='row row-cols-2 g-5'>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/AndreaRene/Peace_of_Mind'><img src={peaceOfMind} className='img-fluid' alt='Mental Health Social Media'></img></a>
                        <p>Mental Health Social Media</p>
                    </div>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/teeoni/SuperTeamRepo'><img src={breweryMasters} className='img-fluid' alt='Local Brewery Finder'></img></a>
                        <p>Local Brewery Finder</p>
                    </div>
                </div>
            </div>
            <h2>Small Scale Projects</h2>
            <div className='container text-center'>
                <div className='row row-cols-2 g-5'>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/Just-Another-ANOTHER-Text-Editor'><img src={JAATE} className='img-fluid' alt='Simple Text Editor'></img></a>
                        <p>Simple Text Editor Web App</p>
                    </div>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/Weather-Dashboard'><img src={weatherDashboard} className='img-fluid' alt='Weather Dashboard'></img></a>
                        <p>Weather Dashboard</p>
                    </div>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/Tech-Blog'><img src={techBlog} className='img-fluid' alt='A Tech Blog'></img></a>
                        <p>A Tech Blog</p>
                    </div>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/Javascript-Password-Generator'><img src={passwordGenerator} className='img-fluid' alt='A Password Generator'></img></a>
                        <p>Password Generator</p>
                    </div>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/eCommerce-Back-End'><img src={ecommerceAPI} className='img-fluid' alt='Shopping Online Visualization'></img></a>
                        <p>E-Commerce Back-End Database</p>
                    </div>
                    <div className='col projectShowcase'>
                        <a href='https://github.com/ParksFG/Social-Network-API'><img src={socialMediaAPI} className='img-fluid' alt='Social Media'></img></a>
                        <p>Social Media API</p>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
        </AnimatePresence>
    );
}
