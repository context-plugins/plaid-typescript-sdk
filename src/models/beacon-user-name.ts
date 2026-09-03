import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserName = {
  givenName: string;
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
