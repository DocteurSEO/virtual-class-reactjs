import { TopBar } from "./TopBar";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Topbar",
  component: TopBar,
  argTypes: {
    left: { control: "color" },
    right: { control: "color" },
    zIndex: { control: "number" },
  },
};

const Template = (args) => {
  return <TopBar color={args} />;
};

export const Default = Template.bind({});
Default.args = {
  left: "#ff512f",
  right: "#dd2476",
  zIndex: "1",
};

export const PinkAndOrange = Template.bind({});
PinkAndOrange.args = {
  left: "pink",
  right: "#FFD0C4",
  zIndex: "1",
};

export const Black = Template.bind({});
Black.args = {
  left: "black",
  right: "black",
  zIndex: "1",
};
