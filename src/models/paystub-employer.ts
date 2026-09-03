import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paystubAddressSchema, type PaystubAddress } from "./paystub-address.js";

export type PaystubEmployer = {
  address?: PaystubAddress;
  name: string | null;
};

export const paystubEmployerSchema: Schema<PaystubEmployer> = s.object<PaystubEmployer>({
  address: s.optional(s.lazy(() => paystubAddressSchema)),
  name: s.nullable(s.string()),
});
