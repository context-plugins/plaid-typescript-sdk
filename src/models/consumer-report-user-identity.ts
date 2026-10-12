import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressDataSchema, type AddressData } from "./address-data.js";

/**
 * This field is only used by integrations created before December 10, 2025. All other integrations
 * must use the `identity` object instead. For more details, see [New User
 * APIs](https://plaid.com/docs/api/users/user-apis). To create a Plaid Check Consumer Report for a
 * user when using a `user_token`, this field must be present. If this field is not provided during
 * user token creation, you can add it to the user later by calling `/user/update`. Once the field
 * has been added to the user, you will be able to call `/link/token/create` with a non-empty
 * `consumer_report_permissible_purpose` (which will automatically create a Plaid Check Consumer
 * Report), or call `/cra/check_report/create` for that user.
 */
export type ConsumerReportUserIdentity = {
  /** The user's first name */
  firstName: string;
  /** The user's last name */
  lastName: string;
  /**
   * The user's phone number, in E.164 format: +{countrycode}{number}. For example: "+14157452130".
   * Phone numbers provided in other formats will be parsed on a best-effort basis. Phone number
   * input is validated against valid number ranges; number strings that do not match a real-world
   * phone numbering scheme may cause the request to fail, even in the Sandbox test environment.
   */
  phoneNumbers: string[];
  /** The user's emails */
  emails: string[];
  /**
   * The user's full Social Security number. This field should only be provided by lenders intending
   * to share the resulting consumer report with a Government-Sponsored Enterprise (GSE), such as
   * Fannie Mae or Freddie Mac.
   *
   * Format: "ddd-dd-dddd"
   */
  ssnFull?: string | null;
  /** The last 4 digits of the user's Social Security number. */
  ssnLast4?: string | null;
  /**
   * To be provided in the format "yyyy-mm-dd". This field is required for all Plaid Check
   * customers.
   */
  dateOfBirth: string | null;
  /** Data about the components comprising an address. */
  primaryAddress: AddressData;
};

export const consumerReportUserIdentitySchema: Schema<ConsumerReportUserIdentity> =
  s.object<ConsumerReportUserIdentity>({
    firstName: s.string(),
    lastName: s.string(),
    phoneNumbers: s.array(s.string()),
    emails: s.array(s.string()),
    ssnFull: s.optionalNullable(s.string()),
    ssnLast4: s.optionalNullable(s.string()),
    dateOfBirth: s.nullable(s.dateOnly()),
    primaryAddress: addressDataSchema,
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      phoneNumbers: "phone_numbers",
      ssnFull: "ssn_full",
      ssnLast4: "ssn_last_4",
      dateOfBirth: "date_of_birth",
      primaryAddress: "primary_address",
    },
  });
