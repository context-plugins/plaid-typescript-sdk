import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The full name for a given Beacon User. */
export type BeaconUserName = {
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  givenName: string;
  /** A string with at least one non-whitespace character, with a max length of 100 characters. */
  familyName: string;
};

export const beaconUserNameSchema: Schema<BeaconUserName> = s.object<BeaconUserName>({
  givenName: s.string(),
  familyName: s.string(),
  _keysMap: {
    givenName: "given_name",
    familyName: "family_name",
  },
});
