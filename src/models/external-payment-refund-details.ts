import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recipientBacsNullableSchema, type RecipientBacsNullable } from "./recipient-bacs-nullable.js";

export type ExternalPaymentRefundDetails = {
  name: string;
  iban: string | null;
  bacs: RecipientBacsNullable | null;
};

export const externalPaymentRefundDetailsSchema: Schema<ExternalPaymentRefundDetails> =
  s.object<ExternalPaymentRefundDetails>({
    name: s.string(),
    iban: s.nullable(s.string()),
    bacs: s.nullable(s.lazy(() => recipientBacsNullableSchema)),
  });
