import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The user's legal name */
export type SignalPersonName = {
  /** The user's name prefix (e.g. "Mr.") */
  prefix?: string | null;
  /**
   * The user's given name. If the user has a one-word name, it should be provided in this field.
   */
  givenName?: string | null;
  /** The user's middle name */
  middleName?: string | null;
  /** The user's family name / surname */
  familyName?: string | null;
  /** The user's name suffix (e.g. "II") */
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
