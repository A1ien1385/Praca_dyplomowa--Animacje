import React, {useRef, useEffect} from "react";
import { ReactComponent as TheShinningScene } from "./svg/Shinning.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function Shinning() {
  const wrapper = useRef(null);
 
  useEffect(()=> {
    const [elements] = wrapper.current.children;

    const jackFace = elements.getElementById("ACTIVEJACKFACE");
    const blood = elements.getElementById("ACTIVEBLOOD");
   
    gsap.set([jackFace], {y: 600});
    gsap.set([blood], {autoAlpha: 0});

    gsap.to(jackFace, {delay: 2.5, duration: .7, y: 0});
    gsap.to(blood, {delay: 3.5, duration: .2, autoAlpha: 1});
      
      
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <TheShinningScene/>
      </div>
    </>
  );
}
