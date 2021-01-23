import PropTypes from "prop-types";
import { setRadial } from "./TopBarLogic";
import "./TopBar.scss";

/**
 *
 * This component displays a Topbar, the comments allow to change the radial of the background
 *
 *
 * ###Usage
 *
 * ```jsx
 *
 *<TopBar color=" {
    left: "#ff512f",
    right: "#dd2476",
  }" />
 *
 * ```
 *
 */

export const TopBar = ({ color }) => {
  return <div class="r-block top-bar" style={setRadial(color)}></div>;
};

TopBar.propTypes = {
  color: PropTypes.array,
};

TopBar.defaultProps = {
  color: {
    left: "#ff512f",
    right: "#dd2476",
  },
};
