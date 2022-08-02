import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function AboutAuthor() {
    
  const [state] = useState({
    title: "My name...",
    titleTwo: "My profession is..",
    titleThree: "I like..."
  })

      return (
      <>
       <div className="animation_box typing--box">
           <h2>
            <div className='typewriter_element'>{state.title}</div>
            <div className='typewriter_element'>{state.titleTwo}</div>
            <div className='typewriter_element'>{state.titleThree}</div>
           </h2>

           <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 40,
            strings: [
              "xdd",
              "lilili",
              "barararara",
            ],
           }}
           />
      </div>
      </>
    );
  }