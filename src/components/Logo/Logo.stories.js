import { Logo } from "./Logo";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Logo",
  component: Logo,
  argTypes: {
    left: { control: "color" },
    topLeft: { control: "color" },
    topRight: { control: "color" },
    right: { control: "color" },
    bottomRight: { control: "color" },
    bottom: { control: "color" },
    end: { control: "color" },
  },
};

const Template = (args) => {
  return <Logo color={args} />;
};

export const Default = Template.bind({});
Default.args = {
  left: "#BA68C8",
  topLeft: "#37CBA2",
  topRight: "#BA68C8",
  right: "#FFD100",
  bottomRight: "#FF9700",
  bottom: "#FD5857",
  end: "#BA68C8",
};

export const Pink = Template.bind({});
Pink.args = {
  left: "pink",
  topLeft: "pink",
  topRight: "pink",
  right: "pink",
  bottomRight: "pink",
  bottom: "pink",
  end: "pink",
};

export const Black = Template.bind({});
Black.args = {
  left: "Black",
  topLeft: "Black",
  topRight: "Black",
  right: "Black",
  bottomRight: "Black",
  bottom: "Black",
  end: "Black",
};

export const Green = Template.bind({});
Green.args = {
  left: "green",
  topLeft: "green",
  topRight: "green",
  right: "green",
  bottomRight: "green",
  bottom: "green",
  end: "green",
};

export const RedAndBlack = Template.bind({});
RedAndBlack.args = {
  left: "red",
  topLeft: "black",
  topRight: "red",
  right: "black",
  bottomRight: "red",
  bottom: "red",
  end: "black",
};
