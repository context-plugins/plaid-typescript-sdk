import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { emailSchema, type Email } from "./email.js";
import { phoneNumberSchema, type PhoneNumber } from "./phone-number.js";

/**
 * Data returned from the financial institution about the owner or owners of an account. Only the
 * `names` array must be non-empty.
 */
export type Owner = {
  /**
   * A list of names associated with the account by the financial institution. In the case of a
   * joint account, Plaid will make a best effort to report the names of all account holders.
   *
   * If an Item contains multiple accounts with different owner names, some institutions will report
   * all names associated with the Item in each account's `names` array.
   */
  names: string[];
  /**
   * A list of phone numbers associated with the account by the financial institution. May be an
   * empty array if no relevant information is returned from the financial institution.
   */
  phoneNumbers: PhoneNumber[];
  /**
   * A list of email addresses associated with the account by the financial institution. May be an
   * empty array if no relevant information is returned from the financial institution.
   */
  emails: Email[];
  /**
   * Data about the various addresses associated with the account by the financial institution. May
   * be an empty array if no relevant information is returned from the financial institution.
   */
  addresses: Address[];
};

export const ownerSchema: Schema<Owner> = s.object<Owner>({
  names: s.array(s.string()),
  phoneNumbers: s.array(s.lazy(() => phoneNumberSchema)),
  emails: s.array(s.lazy(() => emailSchema)),
  addresses: s.array(s.lazy(() => addressSchema)),
  _keysMap: {
    phoneNumbers: "phone_numbers",
  },
});
