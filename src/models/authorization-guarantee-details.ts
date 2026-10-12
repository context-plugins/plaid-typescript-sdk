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

/**
 * Adaptive guarantee details for a transfer authorization, including the guarantee outcome and
 * settlement schedule. Omitted when no guarantee was attempted.
 */
export type AuthorizationGuaranteeDetails = {
  /**
   * The adaptive guarantee outcome for a transfer.
   *
   * `FULL_INSTANT`: The full transfer amount is guaranteed and funds are available instantly.
   *
   * `PARTIAL_INSTANT_ONLY`: A partial amount is guaranteed and available instantly; the remainder
   * is not guaranteed.
   *
   * `PARTIAL_INSTANT_WITH_OBSERVATION_WINDOW`: A partial amount is guaranteed instantly; an
   * additional amount is conditionally guaranteed subject to an observation window.
   *
   * `NOT_GUARANTEED`: Plaid did not provide a guarantee for this transfer.
   */
  outcome: TransferGuaranteeOutcome;
  /** The adaptive guarantee settlement schedule for this authorization. */
  schedule: AuthorizationGuaranteeScheduleItem[];
};

export const authorizationGuaranteeDetailsSchema: Schema<AuthorizationGuaranteeDetails> =
  s.object<AuthorizationGuaranteeDetails>({
    outcome: transferGuaranteeOutcomeSchema,
    schedule: s.array(s.lazy(() => authorizationGuaranteeScheduleItemSchema)),
  });
