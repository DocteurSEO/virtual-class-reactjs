import { Header } from "./Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Header",
  component: Header,
};

const Template = (args) => {
  return <Header color={{ ...args }} />;
};

export const Default = Template.bind({});
