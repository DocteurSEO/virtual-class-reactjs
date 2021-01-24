import { useState } from "react";
import { useMemo } from "react";

import "./Header.scss";
import { TopBar } from "../../TopBar/TopBar";
import { Logo } from "../../Logo/Logo";
import { Label } from "../../Label/Label";
import { Menu } from "../../Menu/Menu";

export const Header = ({ text, color }) => {
  const [activeMenu, setActiveMenu] = useState(false);

  // const displayMenu = (etat) => {
  //   setActiveMenu(etat);
  //   console.log(activeMenu);
  // };

  const displayMenu = useMemo(() => {
    return (etat) => {
      setActiveMenu(etat);
      console.log("meno", activeMenu);
    };
  }, [activeMenu]);

  return (
    <>
      <Menu statut={activeMenu} onMenuClick={displayMenu} />
      <TopBar color={color} />
      <div class="top-container">
        <div className="r-block top-center-container">
          <div className="inner-container top-text-container">
            <Logo />
            <p>{text}</p>
          </div>
          <Label onLabelClick={displayMenu} />
        </div>
      </div>
    </>
  );
};
