import React, {useRef, useEffect} from "react";
import { ReactComponent as TheRingScene } from "./svg/TheRing.svg";
import gsap from "gsap";
import { TweenMax } from "gsap/gsap-core";

export default function TheRing() {
  return (
    <>
      <div className="animation_box">
        <TheRingScene/>
      </div>
    </>
  );
}
