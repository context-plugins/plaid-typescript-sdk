import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name = {
  firstName: string;
  lastName: string;
};

export const nameSchema: Schema<Name> = s.object<Name>({
  firstName: s.string(),
  lastName: s.string(),
  _keysMap: {
    firstName: "FirstName",
    lastName: "LastName",
  },
});
