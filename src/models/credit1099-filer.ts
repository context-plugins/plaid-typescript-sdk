import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

export type Credit1099Filer = {
  address?: CreditPayStubAddress;
  name?: string | null;
  tin?: string | null;
  type?: string | null;
};

export const credit1099FilerSchema: Schema<Credit1099Filer> = s.object<Credit1099Filer>({
  address: s.optional(s.lazy(() => creditPayStubAddressSchema)),
  name: s.optionalNullable(s.string()),
  tin: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
});
