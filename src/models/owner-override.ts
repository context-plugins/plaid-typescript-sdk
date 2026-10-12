import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { emailSchema, type Email } from "./email.js";
import { phoneNumberSchema, type PhoneNumber } from "./phone-number.js";

/**
 * Data about the owner or owners of an account. Any fields not specified will be filled in with
 * default Sandbox information.
 */
export type OwnerOverride = {
  /**
   * A list of names associated with the account by the financial institution. These should always
   * be the names of individuals, even for business accounts. Note that the same name data will be
   * used for all accounts associated with an Item.
   */
  names: string[];
  /** A list of phone numbers associated with the account. */
  phoneNumbers: PhoneNumber[];
  /** A list of email addresses associated with the account. */
  emails: Email[];
  /** Data about the various addresses associated with the account. */
  addresses: Address[];
};

export const ownerOverrideSchema: Schema<OwnerOverride> = s.object<OwnerOverride>({
  names: s.array(s.string()),
  phoneNumbers: s.array(s.lazy(() => phoneNumberSchema)),
  emails: s.array(s.lazy(() => emailSchema)),
  addresses: s.array(s.lazy(() => addressSchema)),
  _keysMap: {
    phoneNumbers: "phone_numbers",
  },
});
