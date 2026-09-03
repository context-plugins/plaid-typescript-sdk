import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";

export type OriginatingFundSource = {
  fullName: string;
  address: PaymentInitiationAddress | null;
  accountNumber: string;
  bic: string;
};

export const originatingFundSourceSchema: Schema<OriginatingFundSource> = s.object<OriginatingFundSource>({
  fullName: s.string(),
  address: s.nullable(s.lazy(() => paymentInitiationAddressSchema)),
  accountNumber: s.string(),
  bic: s.string(),
  _keysMap: {
    fullName: "full_name",
    accountNumber: "account_number",
  },
});
