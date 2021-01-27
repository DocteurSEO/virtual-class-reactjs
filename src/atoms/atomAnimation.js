import { atom } from "recoil";

export const atomAnimation = atom({
  key: "animation",
  default: { header: "up", cards: "container down", form: "" },
});
