import React from "react";

export default (props) => {

  const style = {
    left: `${props.foodDots[0]}%`,
    top: `${props.foodDots[1]}%`
  }

    return (
        <div className="snake-food" style={style}></div>
    )
}