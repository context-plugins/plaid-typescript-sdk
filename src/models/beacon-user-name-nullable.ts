import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BeaconUserNameNullable = {
  givenName: string;
  familyName: string;
};

export const beaconUserNameNullableSchema: Schema<BeaconUserNameNullable> = s.object<BeaconUserNameNullable>({
  givenName: s.string(),
  familyName: s.string(),
  _keysMap: {
    givenName: "given_name",
    familyName: "family_name",
  },
});
