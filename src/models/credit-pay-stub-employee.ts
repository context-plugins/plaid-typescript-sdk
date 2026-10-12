import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";
import { payStubTaxpayerIdSchema, type PayStubTaxpayerId } from "./pay-stub-taxpayer-id.js";

/** Data about the employee. */
export type CreditPayStubEmployee = {
  /** Address on the pay stub. */
  address: CreditPayStubAddress;
  /** The name of the employee. */
  name: string | null;
  /** Marital status of the employee - one of `SINGLE`, `MARRIED`, or `NOT LISTED`. */
  maritalStatus: string | null;
  /** Taxpayer ID of the individual receiving the paystub. */
  taxpayerId: PayStubTaxpayerId;
};

export const creditPayStubEmployeeSchema: Schema<CreditPayStubEmployee> = s.object<CreditPayStubEmployee>({
  address: creditPayStubAddressSchema,
  name: s.nullable(s.string()),
  maritalStatus: s.nullable(s.string()),
  taxpayerId: payStubTaxpayerIdSchema,
  _keysMap: {
    maritalStatus: "marital_status",
    taxpayerId: "taxpayer_id",
  },
});
