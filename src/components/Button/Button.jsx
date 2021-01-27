import "./Button.scss";

export const Button = ({ text, style }) => {
  return (
    <button className="button" style={style}>
      {text}
    </button>
  );
};
