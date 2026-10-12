import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalAddressDataSchema, type SignalAddressData } from "./signal-address-data.js";
import { signalPersonNameSchema, type SignalPersonName } from "./signal-person-name.js";

/**
 * Details about the end user initiating the transaction (i.e., the account holder). These fields
 * are optional, but strongly recommended to increase the accuracy of results when using Signal
 * Transaction Scores. When using a Balance-only ruleset, if the Signal Addendum has been signed,
 * these fields are ignored; if the Addendum has not been signed, using these fields will result in
 * an error.
 */
export type SignalUser = {
  /** The user's legal name */
  name?: SignalPersonName | null;
  /**
   * The user's phone number, in E.164 format: +{countrycode}{number}. For example: "+14151234567"
   */
  phoneNumber?: string | null;
  /** The user's email address. */
  emailAddress?: string | null;
  /** Data about the components comprising an address. */
  address?: SignalAddressData | null;
};

export const signalUserSchema: Schema<SignalUser> = s.object<SignalUser>({
  name: s.optionalNullable(s.lazy(() => signalPersonNameSchema)),
  phoneNumber: s.optionalNullable(s.string()),
  emailAddress: s.optionalNullable(s.string()),
  address: s.optionalNullable(s.lazy(() => signalAddressDataSchema)),
  _keysMap: {
    phoneNumber: "phone_number",
    emailAddress: "email_address",
  },
});
