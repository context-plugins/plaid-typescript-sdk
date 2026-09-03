import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

export type Credit1099Recipient = {
  address?: CreditPayStubAddress;
  name?: string | null;
  tin?: string | null;
  accountNumber?: string | null;
  factaFilingRequirement?: string | null;
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
