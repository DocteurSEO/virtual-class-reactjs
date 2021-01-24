import { Menu } from "./Menu";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Menu",
  component: Menu,
  argTypes: {
    statut: { control: "boolean" },
  },
};

const Template = (args) => {
  console.log(args);
  return <Menu {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  statut: false,
};
