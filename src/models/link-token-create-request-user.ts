import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address1Schema, type Address1 } from "./address1.js";
import { idNumberSchema, type IdNumber } from "./id-number.js";
import { name2Schema, type Name2 } from "./name2.js";

/**
 * An object specifying information about the end user who will be linking their account.
 * **Required** if `user_id` isn't included.
 */
export type LinkTokenCreateRequestUser = {
  /**
   * A unique ID representing the end user. Typically this will be a user ID number from your
   * application. Personally identifiable information, such as an email address or phone number,
   * should not be used in the `client_user_id`. It is currently used as a means of searching logs
   * for the given user in the Plaid Dashboard.
   */
  clientUserId: string;
  /**
   * The user's full legal name, used for [micro-deposit based verification
   * flows](https://plaid.com/docs/auth/coverage/). For a small number of customers on legacy flows,
   * providing this field is required to enable micro-deposit-based flows. For all other customers,
   * this field is optional. Providing the user's name in this field when using micro-deposit-based
   * verification will streamline the end user experience, as the user will not be prompted to enter
   * their name during the Link flow; Plaid will use the provided legal name instead.
   */
  legalName?: string;
  name?: Name2 | null;
  /**
   * The user's phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format. If supplied,
   * will be used when applicable to prefill phone number fields in Link for the [returning user
   * flow](https://plaid.com/docs/link/returning-user) and the [Identity Verification
   * flow](https://plaid.com/docs/identity-verification). Phone number input is validated against
   * valid number ranges; number strings that do not match a real-world phone numbering scheme may
   * cause the request to fail, even in the Sandbox test environment.
   */
  phoneNumber?: string;
  /**
   * The date and time the phone number was verified in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). This was previously
   * an optional field used in the [returning user
   * experience](https://plaid.com/docs/link/returning-user). This field is no longer required to
   * enable the returning user experience.
   *
   * Only pass a verification time for a phone number that you have verified. If you have performed
   * verification but don't have the time, you may supply a signal value of the start of the UNIX
   * epoch.
   *
   * Example: `2020-01-01T00:00:00Z`
   *
   * @deprecated
   */
  phoneNumberVerifiedTime?: Date | null;
  /**
   * The user's email address. Can be used to prefill Link fields when used with [Identity
   * Verification](https://plaid.com/docs/identity-verification).
   */
  emailAddress?: string;
  /**
   * The date and time the email address was verified in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format (`YYYY-MM-DDThh:mm:ssZ`). This was previously
   * an optional field used in the [returning user
   * experience](https://plaid.com/docs/link/returning-user). This field is no longer required to
   * enable the returning user experience.
   *
   * Only pass a verification time for an email address that you have verified. If you have
   * performed verification but don't have the time, you may supply a signal value of the start of
   * the UNIX epoch.
   *
   * Example: `2020-01-01T00:00:00Z`
   *
   * @deprecated
   */
  emailAddressVerifiedTime?: Date | null;
  /**
   * Deprecated and not currently used, use the `id_number` field instead.
   *
   * @deprecated
   */
  ssn?: string;
  /**
   * To be provided in the format "yyyy-mm-dd". Can be used to prefill Link fields when used with
   * Identity Verification.
   */
  dateOfBirth?: string | null;
  address?: Address1 | null;
  idNumber?: IdNumber | null;
};

export const linkTokenCreateRequestUserSchema: Schema<LinkTokenCreateRequestUser> =
  s.object<LinkTokenCreateRequestUser>({
    clientUserId: s.string(),
    legalName: s.optional(s.string()),
    name: s.optionalNullable(s.lazy(() => name2Schema)),
    phoneNumber: s.optional(s.string()),
    phoneNumberVerifiedTime: s.optionalNullable(s.dateTime()),
    emailAddress: s.optional(s.string()),
    emailAddressVerifiedTime: s.optionalNullable(s.dateTime()),
    ssn: s.optional(s.string()),
    dateOfBirth: s.optionalNullable(s.dateOnly()),
    address: s.optionalNullable(s.lazy(() => address1Schema)),
    idNumber: s.optionalNullable(s.lazy(() => idNumberSchema)),
    _keysMap: {
      clientUserId: "client_user_id",
      legalName: "legal_name",
      phoneNumber: "phone_number",
      phoneNumberVerifiedTime: "phone_number_verified_time",
      emailAddress: "email_address",
      emailAddressVerifiedTime: "email_address_verified_time",
      dateOfBirth: "date_of_birth",
      idNumber: "id_number",
    },
  });
