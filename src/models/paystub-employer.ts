import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubAddressSchema, type PaystubAddress } from "./paystub-address.js";

/** Information about the employer on the paystub */
export type PaystubEmployer = {
  /** Address on the paystub */
  address?: PaystubAddress;
  /** The name of the employer on the paystub. */
  name: string | null;
};

export const paystubEmployerSchema: Schema<PaystubEmployer> = s.object<PaystubEmployer>({
  address: s.optional(s.lazy(() => paystubAddressSchema)),
  name: s.nullable(s.string()),
});
