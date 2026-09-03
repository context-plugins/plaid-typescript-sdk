import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SignalPersonName = {
  prefix?: string | null;
  givenName?: string | null;
  middleName?: string | null;
  familyName?: string | null;
  suffix?: string | null;
};

export const signalPersonNameSchema: Schema<SignalPersonName> = s.object<SignalPersonName>({
  prefix: s.optionalNullable(s.string()),
  givenName: s.optionalNullable(s.string()),
  middleName: s.optionalNullable(s.string()),
  familyName: s.optionalNullable(s.string()),
  suffix: s.optionalNullable(s.string()),
  _keysMap: {
    givenName: "given_name",
    middleName: "middle_name",
    familyName: "family_name",
  },
});
