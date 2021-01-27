import "./scss/App.scss";
import { useRecoilValue } from "recoil";
import { atomAnimation } from "./atoms/atomAnimation";

import { Header } from "./components/ui/Header/Header";
import { Cards } from "./components/Cards/Cards";
import { Form } from "./components/Form/Form";

function App() {
  const { headerTitle } = useRecoilValue(atomAnimation);
  return (
    <div className="App">
      <Header text={headerTitle} />
      <Form />
      <Cards />
    </div>
  );
}

export default App;
