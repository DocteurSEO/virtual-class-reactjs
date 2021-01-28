import { atom } from "recoil";

export const atomAnimation = atom({
  key: "animation",
  default: {
    header: "header",
    cards: "container ",
    form: "form displayNone ",
    headerTitle: "Liste des élèves ",
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
