import "./Button.scss";

export const Button = ({ text, style, onButtonClick }) => {
  return (
    <div>
      <button className="button" style={style} onClick={onButtonClick}>
        {text}
      </button>
    </div>
  );
};
