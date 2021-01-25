import { Header } from "./Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Header",
  component: Header,
  argTypes: {
    text: { control: "text" },
  },
};

const Template = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  text: "Votre Titre ici ! ",
};
