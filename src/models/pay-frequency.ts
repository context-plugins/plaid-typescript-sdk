import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { payFrequencyValueSchema, type PayFrequencyValue } from "./pay-frequency-value.js";
import { verificationStatusSchema, type VerificationStatus } from "./verification-status.js";

export type PayFrequency = {
  value: PayFrequencyValue | null;
  verificationStatus: VerificationStatus;
};

export const payFrequencySchema: Schema<PayFrequency> = s.object<PayFrequency>({
  value: s.nullable(s.lazy(() => payFrequencyValueSchema)),
  verificationStatus: verificationStatusSchema,
  _keysMap: {
    verificationStatus: "verification_status",
  },
});
