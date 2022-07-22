import React, {useRef, useEffect} from "react";
import { ReactComponent as TheRingScene } from "./svg/TheRing.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function TheRing() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;

    
    

    gsap.set([], {autoAlpha: 0, ease: "power3.inout"});

    const tl = gsap.timeline({defaults: {ease: "power3.inout"}});

     
      
      
      
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <TheRingScene/>
      </div>
    </>
  );
}
