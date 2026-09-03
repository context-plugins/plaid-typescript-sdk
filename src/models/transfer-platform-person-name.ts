import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferPlatformPersonName = {
  givenName: string;
  familyName: string;
};

export const transferPlatformPersonNameSchema: Schema<TransferPlatformPersonName> =
  s.object<TransferPlatformPersonName>({
    givenName: s.string(),
    familyName: s.string(),
    _keysMap: {
      givenName: "given_name",
      familyName: "family_name",
    },
  });
