import React from "react";
import { useHistory } from "react-router-dom";

const Exorcist = () => {
  const history = useHistory();

  return (
    <>
      <h2>Exorcist</h2>
      <button>Wróc do strony głównej</button>
    </>
  );
};

export default Exorcist;
