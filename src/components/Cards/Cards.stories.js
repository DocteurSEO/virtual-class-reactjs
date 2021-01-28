import { Cards } from "./Cards";
import ahmed from "./img/ahmed.jpg";
import mathieu from "./img/perso.jpg";

import { RecoilRoot } from "recoil";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "UI/Cards",
  component: Cards,
  decorators: [(storyFn) => <RecoilRoot>{storyFn()}</RecoilRoot>],
  argTypes: {
    name: { control: "text" },
    info: { control: "text" },
    picture: { control: "text" },
  },
};

const Template = (args) => {
  console.log("arg", args);
  return <Cards userInfo={{ ...args }} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "Mathieu Debrinofski",
  info: "Developer React",
  picture: mathieu,
};

export const Ahmed = Template.bind({});
Ahmed.args = {
  name: "Ahmed SENEINA",
  info: "Developer React",
  picture: ahmed,
};
