import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubAddressSchema, type PaystubAddress } from "./paystub-address.js";
import { taxpayerIdSchema, type TaxpayerId } from "./taxpayer-id.js";

/** Data about the employee. */
export type Employee = {
  /** Address on the paystub */
  address: PaystubAddress;
  /** The name of the employee. */
  name: string | null;
  /** Marital status of the employee - either `single` or `married`. */
  maritalStatus?: string | null;
  /** Taxpayer ID of the individual receiving the paystub. */
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
