import { Header } from "./Header";
import { RecoilRoot } from "recoil";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Header",
  component: Header,
  decorators: [(storyFn) => <RecoilRoot>{storyFn()}</RecoilRoot>],
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
