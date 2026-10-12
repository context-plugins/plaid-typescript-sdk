import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

/** An object representing a payer used by 1099-MISC tax documents. */
export type Credit1099Payer = {
  /** Address on the pay stub. */
  address?: CreditPayStubAddress;
  /** Name of payer. */
  name?: string | null;
  /** Tax identification number of payer. */
  tin?: string | null;
  /** Telephone number of payer. */
  telephoneNumber?: string | null;
};

export const credit1099PayerSchema: Schema<Credit1099Payer> = s.object<Credit1099Payer>({
  address: s.optional(s.lazy(() => creditPayStubAddressSchema)),
  name: s.optionalNullable(s.string()),
  tin: s.optionalNullable(s.string()),
  telephoneNumber: s.optionalNullable(s.string()),
  _keysMap: {
    telephoneNumber: "telephone_number",
  },
});
