import "./scss/App.scss";

import { Header } from "./components/ui/Header/Header";
import { Cards } from "./components/Cards/Cards";

function App() {
  return (
    <div className="App">
      <Header text="Liste des élèves" />
      <Cards />
    </div>
  );
}

export default App;
