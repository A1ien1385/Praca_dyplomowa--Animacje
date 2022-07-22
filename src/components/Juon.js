import React, {useRef, useEffect} from "react";
import { ReactComponent as JuonScene } from "./svg/Juon1.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function Juon() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;

    const ToshioHeadBack = elements.getElementById('ACTIVE_x5F_TOSHIOHEADBACK');
    const ACTIVE_WINDOW_LEFT_WALL = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_LEFT_x5F_WALL');
    const ACTIVE_WINDOW_1RIGHT_WALL = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_1RIGHT_x5F_WALL');
    const ACTIVE_WINDOW_RIGHTWALL = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_2_x5F_RIGHTWALL');
    const ACTIVE_WINDOW_3LEFTHALF = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_3LEFTHALF');
    const ACTIVE_WINDOW_RIGHTHALF = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_3RIGHTHALF');
    const ACTIVE_WINDOW_RIGHT_WALL = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_4_x5F_RIGHT_x5F_WALL');
    const ACTIVE_WINDOW_RIGHT2_WALL = elements.getElementById('ACTIVE_x5F_WINDOW_x5F_5_x5F_RIGHT_x5F_WALL');
    const ACTIVE_KAYAKOSAEKI_WALKING = elements.getElementById('ACTIVE_x5F_KAYAKOSAEKI_x5F_WALKING');
    const ACTIVE_KAYAKOFACE = elements.getElementById('ACTIVE_x5F_KAYAKOFACE');
    const ACTIVE_TOSHIOHEAD_FRONT = elements.getElementById('ACTIVE_x5F_TOSHIOHEAD_x5F_FRONT');
    const ACTIVE_FRONT = elements.getElementById('ACTIVE_x5F_CLOUD_x5F_FRONT');
    

    gsap.set([ToshioHeadBack, ACTIVE_WINDOW_1RIGHT_WALL, ACTIVE_WINDOW_RIGHTWALL, ACTIVE_WINDOW_3LEFTHALF, ACTIVE_WINDOW_RIGHTHALF, ACTIVE_WINDOW_RIGHT_WALL, ACTIVE_WINDOW_RIGHT2_WALL, ACTIVE_KAYAKOSAEKI_WALKING, ACTIVE_KAYAKOFACE, ACTIVE_TOSHIOHEAD_FRONT], {autoAlpha: 0, ease: "power3.inout"});

    const tl = gsap.timeline({defaults: {ease: "power3.inout"}});

      TweenMax.fromTo(ACTIVE_TOSHIOHEAD_FRONT, {y: '+=300', autoAlpha: 1}, {duration: 12, y: '-=1200', autoAlpha: 1, repeat: -1, repeatDelay: 6})
      TweenMax.fromTo(ACTIVE_KAYAKOSAEKI_WALKING, {x:'+=0', autoAlpha: .5}, {duration: 8, x: '-=200', y: '+=90', autoAlpha: 0, repeat: -1, repeatDelay: 10});
      TweenMax.fromTo(ACTIVE_WINDOW_1RIGHT_WALL, {}, {autoAlpha: 1, duration: 1, repeat: -1, yoyo: true, repeatDelay: 2});
      TweenMax.fromTo(ACTIVE_WINDOW_RIGHTWALL, {}, {autoAlpha: 1, duration: .6, repeat: -1, yoyo: true, repeatDelay: .6});
      TweenMax.fromTo(ACTIVE_WINDOW_3LEFTHALF, {}, {autoAlpha: 1, duration: .6, repeat: -1, yoyo: true, repeatDelay: .2});
      TweenMax.fromTo(ACTIVE_WINDOW_RIGHTHALF, {}, {autoAlpha: 1, duration: .6, repeat: -1, yoyo: true, repeatDelay: .2});
      TweenMax.fromTo(ACTIVE_WINDOW_RIGHT_WALL, {}, {autoAlpha: 1, duration: .6, repeat: -1, yoyo: true, repeatDelay: 1.5});
      TweenMax.fromTo(ACTIVE_WINDOW_RIGHT2_WALL, {}, {autoAlpha: 1, duration: .6, repeat: -1, yoyo: true, repeatDelay: .8});
      TweenMax.fromTo(ToshioHeadBack, {y: '+=300', autoAlpha: 1}, {duration: 14, delay: 9, y: '-=1200', autoAlpha: 1, repeat: -1, repeatDelay: 2});
      TweenMax.fromTo(ACTIVE_KAYAKOFACE, {x: '-=500', autoAlpha: 1, scale: 1.2}, {duration: 2, delay: 6, x: '0', repeat: -1, repeatDelay: 2, yoyo: true});
      gsap.to(ACTIVE_KAYAKOSAEKI_WALKING, {duration: .6, rotation: 5, transformOrigin: '50% 50%', repeat: -1, yoyo: true});
      gsap.to(ToshioHeadBack, {duration: 4, rotation: -10,  ease: "power1.out", transformOrigin: '50% 50%', repeat: -1, yoyo: true});
      gsap.to(ACTIVE_TOSHIOHEAD_FRONT, {duration: 4, rotation: 15, ease: "power1.out", transformOrigin: '50% 10%', repeat: -1, yoyo: true});
      
      
      
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <JuonScene/>
      </div>
    </>
  );
}
