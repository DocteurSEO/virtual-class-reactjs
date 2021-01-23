/**
 *
 * This function accepts an array, it will render a color gradient in an object.
 *
 * @param {Object} colors  color codes default value "#ff512f", "#dd2476" 
 * @returns {Object} return a color gradient background
 * @example
 *
 *     setRadial( {
    left: "#ff512f",
    right: "#dd2476",
  })
 */

export const setRadial = ({ left, right }) => {
  const bgColorRadial = {
    background: ` radial-gradient( circle at 1.98% 13.04%, ${left},
    transparent 100% ), radial-gradient(circle at 98.02% 28.95%,
      ${right}, transparent 100%),
    radial-gradient(circle at 50% 50%, #ffffff, #ffffff 100%)`,
  };
  return bgColorRadial;
};
