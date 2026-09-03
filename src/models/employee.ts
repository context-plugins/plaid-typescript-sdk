import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubAddressSchema, type PaystubAddress } from "./paystub-address.js";
import { taxpayerIdSchema, type TaxpayerId } from "./taxpayer-id.js";

export type Employee = {
  address: PaystubAddress;
  name: string | null;
  maritalStatus?: string | null;
  taxpayerId?: TaxpayerId;
};

export const employeeSchema: Schema<Employee> = s.object<Employee>({
  address: paystubAddressSchema,
  name: s.nullable(s.string()),
  maritalStatus: s.optionalNullable(s.string()),
  taxpayerId: s.optional(s.lazy(() => taxpayerIdSchema)),
  _keysMap: {
    maritalStatus: "marital_status",
    taxpayerId: "taxpayer_id",
  },
});
