import React, { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';

export default function AboutAuthor() {
    
  const [state] = useState({
    linkOne: "GitHub",
    linkTwo: "Codepen",
    linkThree: "LinkedIn"
  })

      return (
      <>
       <div className="animation_box typing--box">
           <Typewriter
           options={{
            autoStart: true,
            loop: true,
            delay: 20,
            strings: [
              "Nazywam się Damian...",
              "Jestem programistą JavaScript i grafikiem komputerowym...",
              "Wolne chwile poświęcam na oglądanie filmów, czytanie książek, granie w gry PC/PS i na dalszy rozwój w swoim fachu.",
              "End of the message.",
            ],
           }}
           />
            
            <ul className='links'>
            <li> <a className='typing--box links' href='https://github.com/A1ien1385'>{state.linkOne} </a></li>
            <li><a className='typing--box links' href='https://codepen.io/A1ien_1385'>{state.linkTwo} </a></li>
            <li><a className='typing--box links' href='https://www.linkedin.com/in/damian-zawadzki-07b2321a5/'>{state.linkThree} </a></li>
           </ul>

           <h2 className='typing--box links'>Zapraszam do odwiedzenia mnie w linkach powyżej:</h2>  

           
      </div>
      </>
    );
  }