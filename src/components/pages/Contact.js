import React from 'react';
import '../../styles/Section.css'

export default function Contact() {
    return (
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
    );
}

