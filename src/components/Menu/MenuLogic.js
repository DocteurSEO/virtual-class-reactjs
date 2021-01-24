import { useState } from "react";

/**
 *
 *Custom Hooks for deal with  state of Menu
 *
 *
 *
 */

export const useStateMenu = (statut) => {
  const [active, setActive] = useState(statut);

  function closeMenu() {
    setActive(false);
  }

  return [active, closeMenu];
};
