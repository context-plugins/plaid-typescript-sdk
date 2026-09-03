import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paystubOverrideEmployeeAddressSchema,
  type PaystubOverrideEmployeeAddress,
} from "./paystub-override-employee-address.js";
import {
  paystubOverrideTaxpayerIdSchema,
  type PaystubOverrideTaxpayerId,
} from "./paystub-override-taxpayer-id.js";

export type PaystubOverrideEmployee = {
  name?: string;
  address?: PaystubOverrideEmployeeAddress;
  maritalStatus?: string | null;
  taxpayerId?: PaystubOverrideTaxpayerId;
};

export const paystubOverrideEmployeeSchema: Schema<PaystubOverrideEmployee> =
  s.object<PaystubOverrideEmployee>({
    name: s.optional(s.string()),
    address: s.optional(s.lazy(() => paystubOverrideEmployeeAddressSchema)),
    maritalStatus: s.optionalNullable(s.string()),
    taxpayerId: s.optional(s.lazy(() => paystubOverrideTaxpayerIdSchema)),
    _keysMap: {
      maritalStatus: "marital_status",
      taxpayerId: "taxpayer_id",
    },
  });
