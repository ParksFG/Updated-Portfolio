import React from 'react';
import selfPortrait from '../../imgs/selfPortrait.png'
import '../../styles/Section.css'

// const styles = {
//     imgStyle: {
//         borderRadius: '10%'
//     }
// }

export default function About() {
  return (
    <div className='section aboutPage'>
        <h1>About Me</h1>
        <div className='clearfix overflow-hidden'>
            <div className='row'>
                <div className='col-sm-4 col-md-4 col-lg-2'>
                    <img src={selfPortrait} className='rounded mx-auto d-block' alt='Self Portrait'></img>
                </div>
                <div className='col-sm-8 col-md-8 col-lg-10'>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
                        velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
                        ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
                        non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
                        ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
                        rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
                        tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
                        porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
                        vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
                        fames ac ante ipsum primis in faucibus.
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

