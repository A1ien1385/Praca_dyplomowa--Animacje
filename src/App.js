import "./scss/main.scss";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from "./components/Menu";
import Exorcist from "./components/Exorcist";
import Alien from "./components/Alien";
import Shinning from "./components/Shinning";
import TheRing from "./components/TheRing";
import TheThing from "./components/TheThing";

function App() {
  let component;
  switch (window.location.pathname) {
    case "/shinning":
      component = <Shinning />;
      break;
    case "/thing":
      component = <TheThing />;
      break;
    case "/ring":
      component = <TheRing />;
      break;
    case "/alien":
      component = <Alien />;
      break;
    case "/exorcist":
      component = <Exorcist />;
      break;
  }

  return (
    <>
      <Menu />
      {component}
    </>
  );
}

export default App;
