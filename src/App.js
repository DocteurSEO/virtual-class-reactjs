import "./scss/App.scss";
import { TopBar } from "./components/Header/TopBar/TopBar";
import { Logo } from "./components/Logo/Logo";
import { Label } from "./components/Label/Label";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Logo />
      <Label />
    </div>
  );
}

export default App;
