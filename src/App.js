import "./scss/App.scss";
import { TopBar } from "./components/Header/TopBar/TopBar";
import { Logo } from "./components/Logo/Logo";
function App() {
  return (
    <div className="App">
      <TopBar color={["#ff512f", "#dd2476"]} />
      <Logo />
    </div>
  );
}

export default App;
