import "./scss/App.scss";
import { TopBar } from "./components/Header/TopBar/TopBar";
import { Logo } from "./components/Logo/Logo";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Logo />
    </div>
  );
}

export default App;
