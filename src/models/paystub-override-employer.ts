import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paystubOverrideEmployerAddressSchema,
  type PaystubOverrideEmployerAddress,
} from "./paystub-override-employer-address.js";

/** The employer on the paystub. */
export type PaystubOverrideEmployer = {
  /** The name of the employer. */
  name?: string | null;
  /** The address of the employer. */
  address?: PaystubOverrideEmployerAddress;
};

export const paystubOverrideEmployerSchema: Schema<PaystubOverrideEmployer> =
  s.object<PaystubOverrideEmployer>({
    name: s.optionalNullable(s.string()),
    address: s.optional(s.lazy(() => paystubOverrideEmployerAddressSchema)),
  });
