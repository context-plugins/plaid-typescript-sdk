import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

/** An object representing a recipient used in both 1099-K and 1099-MISC tax documents. */
export type Credit1099Recipient = {
  /** Address on the pay stub. */
  address?: CreditPayStubAddress;
  /** Name of recipient. */
  name?: string | null;
  /** Tax identification number of recipient. */
  tin?: string | null;
  /** Account number of recipient. */
  accountNumber?: string | null;
  /** Checked if FATCA is a filing requirement. */
  factaFilingRequirement?: string | null;
  /** Checked if 2nd TIN exists. */
  secondTinExists?: string | null;
};

export const credit1099RecipientSchema: Schema<Credit1099Recipient> = s.object<Credit1099Recipient>({
  address: s.optional(s.lazy(() => creditPayStubAddressSchema)),
  name: s.optionalNullable(s.string()),
  tin: s.optionalNullable(s.string()),
  accountNumber: s.optionalNullable(s.string()),
  factaFilingRequirement: s.optionalNullable(s.string()),
  secondTinExists: s.optionalNullable(s.string()),
  _keysMap: {
    accountNumber: "account_number",
    factaFilingRequirement: "facta_filing_requirement",
    secondTinExists: "second_tin_exists",
  },
});
