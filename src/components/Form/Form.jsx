import { useRecoilValue } from "recoil";

import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";
import { useStateUser } from "./FormLogic";

import { Card } from "../Cards/Card";
import { Button } from "../Button/Button";
import "./Form.scss";

/**
 *  Form Component : display form use Recoil for global state
 *
 * ##Usage
 * ```jsx
 *
 *<Form  />
 *
 * ```
 *
 */

export const Form = () => {
  const [
    user,
    displayDeliteBtn,
    onFormChange,
    onFormSubmit,
    onDelete,
  ] = useStateUser();
  const animation = useRecoilValue(atomAnimation);
  const editUser = useRecoilValue(atomEditCurrentUser);

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
          {displayDeliteBtn && (
            <Button
              text="Supprimer"
              style={{ color: "white", background: "#ED597B" }}
              onButtonClick={onDelete}
            />
          )}
        </div>
      </form>
    </div>
  );
};
