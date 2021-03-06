import { Label } from "./Label";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Label",
  component: Label,
  argTypes: { onLabelClick: { action: "clicked" } },
};

const Template = (args) => {
  return <Label {...args} />;
};

export const Default = Template.bind({});
