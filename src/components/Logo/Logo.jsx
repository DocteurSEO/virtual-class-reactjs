import PropTypes from "prop-types";

/**
 *
 *This component displays a logo animation , with the props you can also change the color enjoy !
 *
 *
 * ###Usage
 *
 * ```jsx
 *
 *<Logo color="{
    left: "#BA68C8",
    topLeft: "#37CBA2",
    topRight: "#BA68C8",
    right: "#FFD100",
    bottomRight: "#FF9700",
    bottom: "#FD5857",
    end: "#BA68C8",
  }" />
 *
 * ```
 *
 */

export const Logo = ({ color }) => {
  const { left, topLeft, topRight, right, bottomRight, bottom, end } = color;

  return (
    <div>
      <svg
        version="1.1"
        id="interacthings"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="52px"
        height="60px"
        viewBox="0 0 52 60"
        enable-background="new 0 0 52 60"
      >
        <g>
          <line
            id="turkuaz"
            fill="none"
            stroke={left}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="14"
            y1="35"
            x2="14"
            y2="23"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-60 14 23"
              to="0 14 23"
              begin="1200ms"
              dur="200ms"
              additive="replace"
              fill="freeze"
            ></animateTransform>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="1200ms"
              dur="100ms"
            ></animate>
          </line>

          <line
            id="koyuyesil"
            fill="none"
            stroke={topLeft}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="26"
            y1="16"
            x2="14"
            y2="23"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-60 26 16"
              to="0 26 16"
              begin="1s"
              dur="200ms"
              additive="replace"
              fill="freeze"
            ></animateTransform>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="1s"
              dur="100ms"
            ></animate>
          </line>

          <line
            id="yesil"
            fill="none"
            stroke={topRight}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="26"
            y1="16"
            x2="38"
            y2="23"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-60 38 23"
              to="0 38 23"
              begin="800ms"
              dur="200ms"
              additive="replace"
              fill="freeze"
            ></animateTransform>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="800ms"
              dur="100ms"
            ></animate>
          </line>

          <line
            id="sari"
            fill="none"
            stroke={right}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="38"
            y1="37"
            x2="38"
            y2="23"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-60 38 37"
              to="0 38 37"
              begin="600ms"
              dur="200ms"
              additive="replace"
              fill="freeze"
            ></animateTransform>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="600ms"
              dur="100ms"
            ></animate>
          </line>

          <line
            id="turuncu"
            fill="none"
            stroke={bottomRight}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="38"
            y1="37"
            x2="26"
            y2="44"
            opacity="0"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="-60 26 44"
              to="0 26 44"
              begin="400ms"
              dur="200ms"
              additive="replace"
              fill="freeze"
            ></animateTransform>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="400ms"
              dur="100ms"
            ></animate>
          </line>

          <line
            id="kirmizi"
            fill="none"
            stroke={bottom}
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            x1="26"
            y1="44"
            x2="26"
            y2="30"
            opacity="0"
          >
            <animate
              attributeName="y1"
              begin="200ms"
              dur="200ms"
              fill="freeze"
              from="30"
              to="44"
            ></animate>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="200ms"
              dur="100ms"
            ></animate>
          </line>

          <circle id="nokta" fill={end} cx="26" cy="30" r="4" opacity="0">
            <animate
              attributeName="r"
              begin="0s"
              dur="200ms"
              fill="freeze"
              from="0"
              to="4"
            ></animate>
            <animate
              attributeName="opacity"
              from="0"
              to="1"
              fill="freeze"
              begin="0s"
              dur="100ms"
            ></animate>
          </circle>
        </g>
      </svg>
    </div>
  );
};

Logo.propTypes = {
  color: PropTypes.objectOf(PropTypes.string),
};

Logo.defaultProps = {
  color: {
    left: "#BA68C8",
    topLeft: "#37CBA2",
    topRight: "#BA68C8",
    right: "#FFD100",
    bottomRight: "#FF9700",
    bottom: "#FD5857",
    end: "#BA68C8",
  },
};
