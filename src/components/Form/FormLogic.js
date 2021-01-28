import { useState, useEffect } from "react";
import { ref } from "../../firebase";
import { useRecoilState, useRecoilValue } from "recoil";

import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";
const user = ref.child("user");

/**
 *
 * Form loogic: all the functionalities related to the form ,
 * to add or modify users,
 *
 * as the case may be, the data is loaded and saved on the database,
 * delete a user or add a new one
 *
 *
 */

export const useStateUser = () => {
  const defaultUrlPicture = `https://firebasestorage.googleapis.com/v0/b/virtualclass-5022b.appspot.com/o/homer.gif?alt=media&token=0cb4d472-6f67-4530-a1cf-0654c9d1bd5e`;
  const [userInfo, setUserInfo] = useState({
    name: "",
    info: "",
    picture: defaultUrlPicture,
  });
  const [displayDeliteBtn, setDisplayDeliteBtn] = useState(false);

  const [animation, setAnimation] = useRecoilState(atomAnimation);
  const editUser = useRecoilValue(atomEditCurrentUser);
  const [type, setType] = useState("");
  useEffect(() => {
    setType("push");
    setDisplayDeliteBtn(false);

    if (editUser.id !== "") {
      setType("update");
      setDisplayDeliteBtn(true);
    }

    const input = document.querySelector("form").elements;
    input[0].value = editUser.name;
    input[1].value = editUser.info;
    input[2].value = editUser.picture;
    setUserInfo({
      ...userInfo,
      name: input[0].value,
      info: input[1].value,
      picture: defaultUrlPicture,
    });
  }, [editUser]);

  function animationPage() {
    setAnimation({
      ...animation,
      header: "",
      cards: " container rDown",
      form: "form left",
      headerTitle: "Liste des élèves ! ",
    });
  }

  function onFormChange(e, editUser) {
    const input = e.currentTarget.elements;
    const picture = input[2].value !== "" ? input[2].value : defaultUrlPicture;
    console.log(userInfo);
    setUserInfo({
      ...userInfo,
      name: input[0].value,
      info: input[1].value,
      picture,
    });
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const id = editUser.id;

    typeOfSubmit(userInfo, id, type);
  };

  const onDelete = (e) => {
    e.preventDefault();
    const id = editUser.id;

    user.child(id).remove((error) => handleSubmitError(error));
  };

  function typeOfSubmit(userInfo, id, type) {
    if (type === "update") {
      user.child(id).update(userInfo, (error) => handleSubmitError(error));
    } else {
      user.push(userInfo, (error) => handleSubmitError(error));
    }
  }

  function handleSubmitError(error) {
    if (error) {
      console.log(error);
    } else {
      animationPage();
    }
  }

  return [userInfo, displayDeliteBtn, onFormChange, onFormSubmit, onDelete];
};
