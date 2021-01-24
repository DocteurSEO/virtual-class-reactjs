import "./scss/App.scss";
import { TopBar } from "./components/Header/TopBar/TopBar";
import { Logo } from "./components/Logo/Logo";
import { Label } from "./components/Label/Label";
import { Menu } from "./components/Menu/Menu";

function App() {
  return (
    <div className="App">
      <TopBar />
      <Logo />
      <Label />
      <Menu />
    </div>
  );
}

export default App;
