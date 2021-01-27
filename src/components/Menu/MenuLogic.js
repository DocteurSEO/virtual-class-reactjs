import { useState, useEffect } from "react";

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

  useEffect(() => {
    setActive(statut);
  }, [statut]);

  /** @function closeMenu close the menu   */
  function closeMenu() {
    onMenuClick(false);
  }

  return [active, closeMenu];
};
