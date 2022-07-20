import React, {useRef, useEffect} from "react";
import { ReactComponent as JuonScene } from "./svg/Juon.svg";
import gsap from "gsap";

export default function Juon() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;

    const ToshioHeadBack = elements.getElementById('ACTIVE_x5F_TOSHIOHEADBACK');
    gsap.set([ToshioHeadBack], {autoAlpha: 1});
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <JuonScene/>
      </div>
    </>
  );
}
