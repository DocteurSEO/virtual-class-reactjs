import { useState, useEffect } from "react";
import { ref } from "../../firebase";
import { useRecoilState, useRecoilValue } from "recoil";

import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";
const user = ref.child("user");

export const useStateUser = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    info: "",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/virtualclass-5022b.appspot.com/o/homer.gif?alt=media&token=0cb4d472-6f67-4530-a1cf-0654c9d1bd5e",
  });

  const [animation, setAnimation] = useRecoilState(atomAnimation);
  const editUser = useRecoilValue(atomEditCurrentUser);
  const [type, setType] = useState("");
  useEffect(() => {
    if (editUser.id !== "") {
      setType("update");
      const input = document.querySelector("form").elements;
      input[0].value = editUser.name;
      input[1].value = editUser.info;
      input[2].value = editUser.picture;
    }
  }, [editUser]);
  function animationPage() {
    setAnimation({
      ...animation,
      header: "",
      cards: " container rDown",
      form: "form left",
    });
    console.log(animation);
  }

  function onFormChange(e, editUser) {
    const input = e.currentTarget.elements;
    const picture =
      input[2].value !== ""
        ? input[2].value
        : "https://firebasestorage.googleapis.com/v0/b/virtualclass-5022b.appspot.com/o/homer.gif?alt=media&token=0cb4d472-6f67-4530-a1cf-0654c9d1bd5e";

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

  function typeOfSubmit(userInfo, id, type) {
    if (type === "update") {
      user.child(id).update(userInfo, (error) => handleSubmitError(error));
    } else if (type === "delete") {
      user.child(id).update(null, (error) => handleSubmitError(error));
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

  return [userInfo, onFormChange, onFormSubmit];
};
