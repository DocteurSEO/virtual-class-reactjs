import { TopBar } from "./TopBar";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Topbar",
  component: TopBar,
  argTypes: {
    colorLeft: { control: "color" },
    colorRight: { control: "color" },
  },
};

const Template = (args) => {
  let colors = Object.values(args);

  return <TopBar color={colors} />;
};

export const Default = Template.bind({});
Default.args = {
  colorLeft: "#ff512f",
  colorRight: "#dd2476",
};

export const Black = Template.bind({});
Black.args = {
  colorLeft: "black",
  colorRight: "black",
};
