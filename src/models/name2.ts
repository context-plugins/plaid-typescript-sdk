import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name2 = {
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  givenName: string;
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  familyName: string;
};

export const name2Schema: Schema<Name2> = s.object<Name2>({
  givenName: s.string(),
  familyName: s.string(),
  _keysMap: {
    givenName: "given_name",
    familyName: "family_name",
  },
});
