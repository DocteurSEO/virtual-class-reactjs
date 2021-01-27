import "./Button.scss";

export const Button = ({ text, style }) => {
  return (
    <div>
      <button className="button" style={style}>
        {text}
      </button>
    </div>
  );
};
