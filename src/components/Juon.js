import React, {useRef, useEffect} from "react";
import { ReactComponent as JuonScene } from "./svg/Juon.svg";
import gsap from "gsap";

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

    gsap.set([ToshioHeadBack, ACTIVE_WINDOW_1RIGHT_WALL, ACTIVE_WINDOW_RIGHTWALL, ACTIVE_WINDOW_3LEFTHALF, ACTIVE_WINDOW_RIGHTHALF, ACTIVE_WINDOW_RIGHT_WALL, ACTIVE_WINDOW_RIGHT2_WALL, ACTIVE_KAYAKOSAEKI_WALKING, ACTIVE_KAYAKOFACE, ACTIVE_TOSHIOHEAD_FRONT], {autoAlpha: 0});

    const tl = gsap.timeline({defaults: {ease: "power3.inout"}});

    tl.fromTo(ACTIVE_TOSHIOHEAD_FRONT, {y: '+=300', autoAlpha: 1}, {duration: 6, y: '-=1200', autoAlpha: 1, repeat: -1, repeatDelay: 6,});
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <JuonScene/>
      </div>
    </>
  );
}
