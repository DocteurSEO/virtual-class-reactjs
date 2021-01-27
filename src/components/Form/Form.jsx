import { useRecoilValue } from "recoil";

import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";
import { useStateUser } from "./FormLogic";

import { Card } from "../Cards/Card";
import { Button } from "../Button/Button";
import "./Form.scss";

export const Form = () => {
  const [user, onFormChange, onFormSubmit] = useStateUser();
  const animation = useRecoilValue(atomAnimation);
  const editUser = useRecoilValue(atomEditCurrentUser);
  console.log("form", editUser);

  return (
    <div className={animation.form}>
      <Card userInfo={user} styles={{ width: "250px" }} />
      <form onChange={(event) => onFormChange(event, editUser)}>
        <input placeholder={"Nom prénom"} />
        <input placeholder="Fonction" />
        <input placeholder="URL image" />
        <div className="btnContainer">
          <Button
            text="Confirmer"
            style={{ color: "black", background: "#82DFC5" }}
            onButtonClick={onFormSubmit}
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
