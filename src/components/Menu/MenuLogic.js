import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import { atomAnimation, atomEditCurrentUser } from "../../atoms/atomAnimation";

/**
 *
 *Custom Hooks for deal with  state of Menu
 *
 *@param {boolean} statut  default value false
 *@param {boolean} active store state of menu 
 *@function setActive state of menu
 *@function useStateMenu main function 
 *@returns {array}
 * @example
 *
 * const [active, setActive] = useStateMenu(true);
  
 *
 */

export const useStateMenu = (statut, onMenuClick) => {
  const [active, setActive] = useState(statut);
  const [animation, setAnimation] = useRecoilState(atomAnimation);
  const [user, setUser] = useRecoilState(atomEditCurrentUser);

  useEffect(() => {
    setActive(statut);
  }, [statut]);

  /** @function closeMenu close the menu   */
  function closeMenu() {
    onMenuClick(false);
  }

  function addUser() {
    setAnimation({
      header: "header",
      cards: "container down",
      form: "form rLeft ",
      headerTitle: "Ajouter un élèves ",
    });
    setUser({
      name: "",
      info: "",
      picture: "",
      id: "",
    });
    closeMenu();
  }

  return [active, closeMenu, addUser];
};
