import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paystubOverrideEmployerAddressSchema,
  type PaystubOverrideEmployerAddress,
} from "./paystub-override-employer-address.js";

export type PaystubOverrideEmployer = {
  name?: string | null;
  address?: PaystubOverrideEmployerAddress;
};

export const paystubOverrideEmployerSchema: Schema<PaystubOverrideEmployer> =
  s.object<PaystubOverrideEmployer>({
    name: s.optionalNullable(s.string()),
    address: s.optional(s.lazy(() => paystubOverrideEmployerAddressSchema)),
  });
