import { useRecoilState } from "recoil";

import { atomAnimation } from "../../atoms/atomAnimation";
import { useStateUser } from "./FormLogic";

import { Card } from "../Cards/Card";
import { Button } from "../Button/Button";
import "./Form.scss";

export const Form = () => {
  // const [animation, setAnimation] = useRecoilState(atomAnimation);

  // function animationPage() {
  //   setAnimation({ ...animation, header: "rUp", cards: " container rDown" });
  //   console.log(animation);
  // }

  const [user, onFormChange] = useStateUser();

  return (
    <div className="form">
      <Card userInfo={user} styles={{ width: "250px" }} />
      <form onChange={onFormChange}>
        <input placeholder="Nom prénom" />
        <input placeholder="URL image" />
        <input placeholder="Fonction" />
        <div className="btnContainer">
          <Button
            text="Confirmer"
            style={{ color: "black", background: "#82DFC5" }}
          />
          <Button
            text="Supprimer"
            style={{ color: "white", background: "#ED597B" }}
          />
        </div>
      </form>
    </div>
  );
};
