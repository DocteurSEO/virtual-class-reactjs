import { atom } from "recoil";

export const atomAnimation = atom({
  key: "animation",
  default: { header: "", cards: "container down", form: "" },
});
