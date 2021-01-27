import { useState } from "react";

export const useStateUser = () => {
  const [user, setUser] = useState({
    name: "",
    info: "",
    picture:
      "https://firebasestorage.googleapis.com/v0/b/virtualclass-5022b.appspot.com/o/homer.gif?alt=media&token=0cb4d472-6f67-4530-a1cf-0654c9d1bd5e",
  });

  function onFormChange(e) {
    const input = e.currentTarget.elements;
    const picture =
      input[1].value !== ""
        ? input[1].value
        : "https://firebasestorage.googleapis.com/v0/b/virtualclass-5022b.appspot.com/o/homer.gif?alt=media&token=0cb4d472-6f67-4530-a1cf-0654c9d1bd5e";

    setUser({
      ...user,
      name: input[0].value,
      picture,
      info: input[2].value,
    });
  }

  return [user, onFormChange];
};
