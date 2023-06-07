"use client";

import React from 'react'
import Typed from 'typed.js';

const MyName = () => {
    const el = React.useRef(null);
    React.useEffect(() => {
        // TODO: add emoji?
        const typed = new Typed(el.current, {
            strings: ['\b software engineer', '\b law student', 'n athlete', 'n avid reader'],
            typeSpeed: 95,
            loop: true,
            loopCount: Infinity,
            backSpeed: 50,
            backDelay: 1000,
        });
    
        return () => {
          typed.destroy();
        };
      }, []);

    return ( 
        <section id='my-name-section'>
            <h1>My name is Will!</h1>
            <h3>I'm a<span ref={el} /></h3>
        </section>
     );
}
 
export default MyName;