import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";
import { recipientBacsNullableSchema, type RecipientBacsNullable } from "./recipient-bacs-nullable.js";

export type PaymentInitiationRecipientCreateRequest = {
  clientId?: string;
  secret?: string;
  name: string;
  iban?: string | null;
  bacs?: RecipientBacsNullable | null;
  address?: PaymentInitiationAddress | null;
};

export const paymentInitiationRecipientCreateRequestSchema: Schema<PaymentInitiationRecipientCreateRequest> =
  s.object<PaymentInitiationRecipientCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    name: s.string(),
    iban: s.optionalNullable(s.string()),
    bacs: s.optionalNullable(s.lazy(() => recipientBacsNullableSchema)),
    address: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    _keysMap: {
      clientId: "client_id",
    },
  });
