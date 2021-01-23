import { TopBar } from "./TopBar";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Topbar",
  component: TopBar,
  argTypes: {
    left: { control: "color" },
    right: { control: "color" },
  },
};

const Template = (args) => {
  let colors = Object.values(args);

  return <TopBar color={args} />;
};

export const Default = Template.bind({});
Default.args = {
  left: "#ff512f",
  right: "#dd2476",
};

export const PinkAndOrange = Template.bind({});
PinkAndOrange.args = {
  left: "pink",
  right: "#FFD0C4",
};

export const Black = Template.bind({});
Black.args = {
  left: "black",
  right: "black",
};
