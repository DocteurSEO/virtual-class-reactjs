import "./Button.scss";

/**
 *
 * Button component : displays Buttion 
 *   

 *##Usage 

 * ```jsx
 *
 *<Button text='Confirmer' 
 style={{background:black,color:white}} />
 *
 * ```
 */

export const Button = ({ text, style, onButtonClick }) => {
  return (
    <div>
      <button className="button" style={style} onClick={onButtonClick}>
        {text}
      </button>
    </div>
  );
};
