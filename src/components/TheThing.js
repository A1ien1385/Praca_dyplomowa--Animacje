import React, {useRef, useEffect} from "react";
import { ReactComponent as TheThingScene } from "./svg/TheThing.svg";
import gsap from "gsap";


export default function TheThing() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;
    
    const norrisThing = elements.getElementById('ACTIVENORRIS');
    const palmerThing = elements.getElementById('ACTIVEPALMER');
    const daySky = elements.getElementById('ACTIVEDAY');

    gsap.set([norrisThing, palmerThing], {ease: "power3.inout"});
    gsap.set([palmerThing], {y: 400})
    gsap.set([norrisThing], {x: -600})

    gsap.to(daySky, {delay: 4, duration: 3, autoAlpha: 0});
    gsap.to(palmerThing, {delay: 6, duration: 1,  y: 0});
    gsap.to(norrisThing, {delay: 7, duration: 1.5,  x: 0});
        
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <TheThingScene/>
      </div>
    </>
  );
}
