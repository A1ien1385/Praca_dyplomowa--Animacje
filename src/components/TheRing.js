import React, {useRef, useEffect} from "react";
import { ReactComponent as TheRingScene } from "./svg/TheRing.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function TheRing() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;

    const SadakoFace = elements.getElementById("ACTIVE_x5F_SADAKO_x5F_FACE");
    const ACTIVE_LIGHT = elements.getElementById("ACTIVE_x5F_TV_x5F_LIGHT");
    const SADAKOFRAME1 = elements.getElementById("ACTIVE_x5F_SADAKO1");
    const SADAKOFRAME2 = elements.getElementById("ACTIVE_x5F_SADAKO2");
    const SADAKOFRAME3 = elements.getElementById("ACTIVE_x5F_SADAKO3");
    const SADAKOFRAME4 = elements.getElementById("ACTIVE_x5F_SADAKO4");
    const FOG  = elements.getElementById("ACTIVE_x5F_FOG1");
    const EYE1 = elements.getElementById("ACTIVE_x5F_EYE1")
    const EYE2 = elements.getElementById("ACTIVE_x5F_EYE2")
    const EYE3 = elements.getElementById("ACTIVE_x5F_EYE3")
    const EYE4 = elements.getElementById("ACTIVE_x5F_EYE4")
    const EYE5 = elements.getElementById("ACTIVE_x5F_EYE5")
    const EYE6 = elements.getElementById("ACTIVE_x5F_EYE6")
    const RING = elements.getElementById('ACTIVE_x5F_RING');
    

    gsap.set([SadakoFace, ACTIVE_LIGHT, SADAKOFRAME1, SADAKOFRAME2, SADAKOFRAME3, SADAKOFRAME4, EYE1, EYE2, EYE3, EYE4, EYE5, EYE6, RING], {autoAlpha: 0, ease: "power3.inout"});

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
