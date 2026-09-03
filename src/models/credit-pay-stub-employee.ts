import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { creditPayStubAddressSchema, type CreditPayStubAddress } from "./credit-pay-stub-address.js";
import { payStubTaxpayerIdSchema, type PayStubTaxpayerId } from "./pay-stub-taxpayer-id.js";

export type CreditPayStubEmployee = {
  address: CreditPayStubAddress;
  name: string | null;
  maritalStatus: string | null;
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
