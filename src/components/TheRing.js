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
    

    gsap.set([SadakoFace, ACTIVE_LIGHT, SADAKOFRAME1, SADAKOFRAME2, SADAKOFRAME3, SADAKOFRAME4, EYE1, EYE2, EYE3, EYE4, EYE5, EYE6, RING], {autoAlpha: 0});

    const tl = gsap.timeline({defaults: {ease: "power3.inout", delay: .2}});

    tl.fromTo(SADAKOFRAME1, { autoAlpha: 1}, {ease: "power1.out", duration: 1, autoAlpha: 0})
      .fromTo(SADAKOFRAME2, {duration: 2,  autoAlpha: 0}, { ease: "power1.out",  autoAlpha: 1})
      .to(SADAKOFRAME2, { ease: "power1.out",  autoAlpha: 0})
      .fromTo(SADAKOFRAME3, {duration: 2,  autoAlpha: 0}, { ease: "power1.out",  autoAlpha: 1})
      .to(SADAKOFRAME3, { ease: "power1.out",  autoAlpha: 0})
      .fromTo(SADAKOFRAME4, {duration: 1,  autoAlpha: 0}, { ease: "power1.out",  autoAlpha: 1})
      .to(SADAKOFRAME4, {duration: 4, x: '-=250', y: '-=200', autoAlpha: 0})
      

      gsap.fromTo(FOG, {x: '-=15', y: '-=30', scale: 1}, {x: '+=15', y: '+=30', scale: 1.3, duration: 30, ease: "power1.inOut", repeat: -1, yoyo: true});
      
      gsap.fromTo(EYE1, {autoAlpha: .4, scale: 1}, {autoAlpha: 0,  duration: .3, ease: "power1.inOut",  repeat: -1, repeatDelay: 1, yoyo: true});
      gsap.fromTo(EYE2, {delay: 3, autoAlpha: .3, scale: 1}, {autoAlpha: 0,  duration: .3, ease: "power1.inOut",  repeat: -1, repeatDelay: 3, yoyo: true});
      gsap.fromTo(EYE3, {autoAlpha: .4, scale: 1}, {autoAlpha: 0,  duration: .3, repeatDelay: 3, ease: "power1.inOut",  repeat: -1, yoyo: true});
      gsap.fromTo(EYE4, {delay: 3, autoAlpha: .2, scale: 1}, {autoAlpha: 0,  duration: .7, ease: "power1.inOut", repeatDelay: 3,  repeat: -1, yoyo: true});
      gsap.fromTo(EYE5, {delay: 3, autoAlpha: .3, scale: 1}, {autoAlpha: 0,  duration: .3, ease: "power1.inOut",  repeat: -1, repeatDelay: 3, yoyo: true});

      gsap.fromTo(RING, {delay: 3, autoAlpha: 1, scale: 1}, {autoAlpha: 0,  duration: .3, ease: "power1.inOut",  repeat: -1, repeatDelay: 1, yoyo: true});

      gsap.fromTo(ACTIVE_LIGHT, { autoAlpha: 1, scale: 1}, {autoAlpha: 0,  duration: .3, ease: "power1.inOut",  repeat: -1, yoyo: true});

      gsap.fromTo(SadakoFace, {autoAlpha: 0, scale: 1, x: '-=500'}, {scale: 1.2, repeatDelay: .5, autoAlpha: 1, x: '0', duration: 18, ease: "power1.inOut",  repeat: -1, yoyo: true});
      
      
      
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <TheRingScene/>
      </div>
    </>
  );
}
