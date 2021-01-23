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
    <label for="menuCheckbox" class="checkbox-label menu-label">
      <div class="icone">
        <div class="abs-center black-lines"></div>
      </div>
    </label>
  );
};
