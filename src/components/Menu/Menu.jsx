import PropTypes from "prop-types";
import { useStateMenu } from "./MenuLogic.js";

import "./Menu.scss";

/**
 *
 *This component displays a Menu animation , with the props you can also display the menu !
 *
 *
 * ###Usage
 *
 * ```jsx
 *
 *<Logo statut={true} />
 *
 * ```
 *
 */

export const Menu = ({ statut, onMenuClick }) => {
  const [active, setActive] = useStateMenu(statut, onMenuClick);

  return (
    <div
      className="side-menu"
      style={active ? { left: "0px" } : { left: "-380px" }}
    >
      <label
        htmlFor="menuCheckbox"
        className="checkbox-label side-menu-label"
        onClick={setActive}
      >
        <div className="abs-center white-x "></div>
      </label>
      <div className="r-block menu-content">
        <h3 className="r-block list-header">Élèves</h3>
        <ul className="r-block options-list">
          <li>Ajouter </li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  statut: PropTypes.bool,
};

Menu.defaultProps = {
  statut: false,
};
