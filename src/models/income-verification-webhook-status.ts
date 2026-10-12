import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Status of the income verification webhook */
export type IncomeVerificationWebhookStatus = {
  id: string;
};

export const incomeVerificationWebhookStatusSchema: Schema<IncomeVerificationWebhookStatus> =
  s.object<IncomeVerificationWebhookStatus>({
    id: s.string(),
  });
