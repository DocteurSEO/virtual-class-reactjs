import { Button } from "./Button";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Button",
  component: Button,

  argTypes: {
    text: { control: "text" },
    color: { control: "color" },
    bg: { control: "color" },
  },
};

const Template = (args) => {
  console.log(args);
  return (
    <Button
      text={args.text}
      style={{ background: args.bg, color: args.color }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  text: "Confirmer",
  bg: "#A85EB4",
  color: "white",
};

export const Alert = Template.bind({});
Alert.args = {
  text: "Supprimer",
  bg: "red",
  color: "white",
};
