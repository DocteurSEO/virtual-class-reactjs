import { useRecoilState } from "recoil";
import { atomAnimation } from "../../atoms/atomAnimation";

import { Card } from "../Cards/Card";
import { Button } from "../Button/Button";
import "./Form.scss";

export const Form = () => {
  const [animation, setAnimation] = useRecoilState(atomAnimation);

  function animationPage() {
    setAnimation({ ...animation, header: "rUp", cards: " container rDown" });
    console.log(animation);
  }

  return (
    <div className="form">
      <Card styles={{ width: "250px" }} />
      <form>
        <input placeholder="Nom prénom" />
        <input placeholder="URL image" />
        <input placeholder="Fonction" />
        <div className="btnContainer">
          <Button
            text="Confirmer"
            style={{ color: "white", background: "#ED597B" }}
          />
          <Button text="Supprimer" />
        </div>
      </form>
    </div>
  );
};
