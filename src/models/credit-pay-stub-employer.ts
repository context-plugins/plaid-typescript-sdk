import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";

export type CreditPayStubEmployer = {
  address: CreditPayStubAddress;
  name: string | null;
};

export const creditPayStubEmployerSchema: Schema<CreditPayStubEmployer> = s.object<CreditPayStubEmployer>({
  address: creditPayStubAddressSchema,
  name: s.nullable(s.string()),
});
