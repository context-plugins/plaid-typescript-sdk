import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

/** Information about the employer on the pay stub. */
export type CreditPayStubEmployer = {
  /** Address on the pay stub. */
  address: CreditPayStubAddress;
  /** The name of the employer on the pay stub. */
  name: string | null;
};

export const creditPayStubEmployerSchema: Schema<CreditPayStubEmployer> = s.object<CreditPayStubEmployer>({
  address: creditPayStubAddressSchema,
  name: s.nullable(s.string()),
});
