import { atom } from "recoil";

import { Atoms } from "../../config";

const newUserState = atom({
  key: Atoms.NEW_USER,
  default: "",
});

export { newUserState };
