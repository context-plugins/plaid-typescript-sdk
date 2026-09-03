import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  authorizationGuaranteeScheduleItemSchema,
  type AuthorizationGuaranteeScheduleItem,
} from "./authorization-guarantee-schedule-item.js";
import {
  transferGuaranteeOutcomeSchema,
  type TransferGuaranteeOutcome,
} from "./transfer-guarantee-outcome.js";

export type AuthorizationGuaranteeDetails = {
  outcome: TransferGuaranteeOutcome;
  schedule: AuthorizationGuaranteeScheduleItem[];
};

export const authorizationGuaranteeDetailsSchema: Schema<AuthorizationGuaranteeDetails> =
  s.object<AuthorizationGuaranteeDetails>({
    outcome: transferGuaranteeOutcomeSchema,
    schedule: s.array(s.lazy(() => authorizationGuaranteeScheduleItemSchema)),
  });
