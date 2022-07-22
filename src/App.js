import "./scss/main.scss";
import Menu from "./components/Menu";
import Exorcist from "./components/Exorcist";
import Alien from "./components/Alien";
import Shinning from "./components/Shinning";
import TheRing from "./components/TheRing";
import TheThing from "./components/TheThing";
import Juon from "./components/Juon";
import Comments from "./Comments";
import AboutAuthor from "./AboutAuthor";

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
    case "/juon":
      component = <Juon />;
      break;
    case "/comments":
     component = <Comments/>;
     break;
     case "/aboutAuthor":
     component = <AboutAuthor/>;
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
