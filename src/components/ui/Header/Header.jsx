import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import "./Header.scss";
import { TopBar } from "../../TopBar/TopBar";
import { Logo } from "../../Logo/Logo";
import { Label } from "../../Label/Label";
import { Menu } from "../../Menu/Menu";

/**
 *
 * header component : display header with text animation.
 *
 * ###Usage
 *
 * ```jsx
 *
 *<Header text="I'm the title ^^ " />
 *
 * ```
 */

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

Header.propTypes = {
  text: PropTypes.string,
};

Header.defaultProps = {
  text: "...",
};
