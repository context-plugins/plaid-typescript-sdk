import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

export type Credit1099Payer = {
  address?: CreditPayStubAddress;
  name?: string | null;
  tin?: string | null;
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
