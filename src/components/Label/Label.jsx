import "./Label.scss";
/**
 *
 * This component displays a burger menu icon white animation,
 *
 *
 * ###Usage
 *
 * ```jsx
 *
 *<Label />
 *
 * ```
 *
 */

export const Label = () => {
  return (
    <label htmlFor="menuCheckbox" className="checkbox-label menu-label">
      <div className="icone">
        <div className="abs-center black-lines"></div>
      </div>
    </label>
  );
};
