import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { signalAddressDataSchema, type SignalAddressData } from "./signal-address-data.js";

/** Information about the user whose eligibility is being evaluated. */
export type IncomeVerificationPrecheckUser = {
  /** The user's first name */
  firstName?: string | null;
  /** The user's last name */
  lastName?: string | null;
  /** The user's email address */
  emailAddress?: string | null;
  /** Data about the components comprising an address. */
  homeAddress?: SignalAddressData | null;
};

export const incomeVerificationPrecheckUserSchema: Schema<IncomeVerificationPrecheckUser> =
  s.object<IncomeVerificationPrecheckUser>({
    firstName: s.optionalNullable(s.string()),
    lastName: s.optionalNullable(s.string()),
    emailAddress: s.optionalNullable(s.string()),
    homeAddress: s.optionalNullable(s.lazy(() => signalAddressDataSchema)),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      emailAddress: "email_address",
      homeAddress: "home_address",
    },
  });
