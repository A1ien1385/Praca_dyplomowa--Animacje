import React from "react";

export default (props) => {

  const style = {
    left: `${props.dotFood[0]}%`,
    top: `${props.dotFood[1]}%`
  }

    return (
        <div className="snake-food" style={style}></div>
    )
}