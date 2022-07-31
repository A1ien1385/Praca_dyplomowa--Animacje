import React, {useRef, useEffect} from "react";
import { ReactComponent as TheThingScene } from "./svg/TheThing.svg";
import gsap from "gsap";


export default function TheThing() {
  const wrapper = useRef(null);

  useEffect(()=> {
    const [elements] = wrapper.current.children;
    
        
  })

  return (
    <>
      <div ref={wrapper} className="animation_box">
        <TheThingScene/>
      </div>
    </>
  );
}
