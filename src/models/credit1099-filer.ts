import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

/** An object representing a filer used by 1099-K tax documents. */
export type Credit1099Filer = {
  /** Address on the pay stub. */
  address?: CreditPayStubAddress;
  /** Name of filer. */
  name?: string | null;
  /** Tax identification number of filer. */
  tin?: string | null;
  /**
   * One of the following values will be provided: Payment Settlement Entity (PSE), Electronic
   * Payment Facilitator (EPF), Other Third Party
   */
  type?: string | null;
};

export const credit1099FilerSchema: Schema<Credit1099Filer> = s.object<Credit1099Filer>({
  address: s.optional(s.lazy(() => creditPayStubAddressSchema)),
  name: s.optionalNullable(s.string()),
  tin: s.optionalNullable(s.string()),
  type: s.optionalNullable(s.string()),
});
