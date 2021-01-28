import { useRecoilState } from "recoil";

import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";

/**
 * Custom hook which manages the functions for the component Card
 */

export const UseCard = () => {
  const [animation, setAnimation] = useRecoilState(atomAnimation);
  const [currentUser, setCurrentUser] = useRecoilState(atomEditCurrentUser);
  function editUser(id, userInfo) {
    setAnimation({
      ...animation,
      header: "",
      cards: " container down",
      form: "form rLeft",
      headerTitle: "Les modifications sont enregistrées en ligne ",
    });

    setCurrentUser({ ...userInfo, id });
  }
  return [editUser];
};
