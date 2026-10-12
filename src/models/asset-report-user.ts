import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The user object allows you to provide additional information about the user to be appended to the
 * Asset Report. All fields are optional. The `first_name`, `last_name`, and `ssn` fields are
 * required if you would like the Report to be eligible for Fannie Mae's Day 1 Certainty™ program.
 */
export type AssetReportUser = {
  /** An identifier you determine and submit for the user. */
  clientUserId?: string | null;
  /** The user's first name. Required for the Fannie Mae Day 1 Certainty™ program. */
  firstName?: string | null;
  /** The user's middle name */
  middleName?: string | null;
  /** The user's last name. Required for the Fannie Mae Day 1 Certainty™ program. */
  lastName?: string | null;
  /**
   * The user's Social Security Number. Required for the Fannie Mae Day 1 Certainty™ program.
   *
   * Format: "ddd-dd-dddd"
   */
  ssn?: string | null;
  /**
   * The user's phone number, in E.164 format: +{countrycode}{number}. For example: "+14151234567".
   * Phone numbers provided in other formats will be parsed on a best-effort basis.
   */
  phoneNumber?: string | null;
  /** The user's email address. */
  email?: string | null;
};

export const assetReportUserSchema: Schema<AssetReportUser> = s.object<AssetReportUser>({
  clientUserId: s.optionalNullable(s.string()),
  firstName: s.optionalNullable(s.string()),
  middleName: s.optionalNullable(s.string()),
  lastName: s.optionalNullable(s.string()),
  ssn: s.optionalNullable(s.string()),
  phoneNumber: s.optionalNullable(s.string()),
  email: s.optionalNullable(s.string()),
  _keysMap: {
    clientUserId: "client_user_id",
    firstName: "first_name",
    middleName: "middle_name",
    lastName: "last_name",
    phoneNumber: "phone_number",
  },
});
