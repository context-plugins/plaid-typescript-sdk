import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  paymentInitiationAddressSchema,
  type PaymentInitiationAddress,
} from "./payment-initiation-address.js";
import { recipientBacsNullableSchema, type RecipientBacsNullable } from "./recipient-bacs-nullable.js";

export type PaymentInitiationRecipientGetResponse = {
  recipientId: string;
  name: string;
  address?: PaymentInitiationAddress | null;
  iban?: string | null;
  bacs?: RecipientBacsNullable | null;
  requestId: string;
};

export const paymentInitiationRecipientGetResponseSchema: Schema<PaymentInitiationRecipientGetResponse> =
  s.object<PaymentInitiationRecipientGetResponse>({
    recipientId: s.string(),
    name: s.string(),
    address: s.optionalNullable(s.lazy(() => paymentInitiationAddressSchema)),
    iban: s.optionalNullable(s.string()),
    bacs: s.optionalNullable(s.lazy(() => recipientBacsNullableSchema)),
    requestId: s.string(),
    _keysMap: {
      recipientId: "recipient_id",
      requestId: "request_id",
    },
  });
