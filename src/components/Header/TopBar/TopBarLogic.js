/**
 *
 * This function accepts an array, it will render a color gradient in an object.
 *
 * @param {Object[]} colors an array of color codes default value ["#ff512f", "#dd2476"]
 * @returns {Object} return a color gradient background
 * @example
 *
 *     setRadial(["white", "black"])
 */

export const setRadial = (colors = ["#ff512f", "#dd2476"]) => {
  const bgColorRadial = {
    background: ` radial-gradient( circle at 1.98% 13.04%, ${colors[0]},
    transparent 100% ), radial-gradient(circle at 98.02% 28.95%,
      ${colors[1]}, transparent 100%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%)`,
  };
  return bgColorRadial;
};
