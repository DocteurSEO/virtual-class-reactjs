import { atom } from "recoil";

export const atomAnimation = atom({
  key: "animation",
  default: {
    header: "header",
    cards: "container down",
    form: "form  ",
    headerTitle: "Liste des Apprenents ",
  },
});

export const atomEditCurrentUser = atom({
  key: "user",
  default: {
    name: "",
    info: "",
    picture: "",
    id: "",
  },
});
