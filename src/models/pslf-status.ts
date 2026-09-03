import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PslfStatus = {
  estimatedEligibilityDate: string | null;
  paymentsMade: number | null;
  paymentsRemaining: number | null;
};

export const pslfStatusSchema: Schema<PslfStatus> = s.object<PslfStatus>({
  estimatedEligibilityDate: s.nullable(s.dateOnly()),
  paymentsMade: s.nullable(s.number()),
  paymentsRemaining: s.nullable(s.number()),
  _keysMap: {
    estimatedEligibilityDate: "estimated_eligibility_date",
    paymentsMade: "payments_made",
    paymentsRemaining: "payments_remaining",
  },
});
