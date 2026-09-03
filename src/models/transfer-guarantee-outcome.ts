import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferGuaranteeOutcome = {
  FullInstant: "FULL_INSTANT",
  PartialInstantOnly: "PARTIAL_INSTANT_ONLY",
  PartialInstantWithObservationWindow: "PARTIAL_INSTANT_WITH_OBSERVATION_WINDOW",
  NotGuaranteed: "NOT_GUARANTEED",
} as const;
export type TransferGuaranteeOutcome =
  | (typeof TransferGuaranteeOutcome)[keyof typeof TransferGuaranteeOutcome]
  | (string & {});

export const transferGuaranteeOutcomeSchema: EnumSchema<TransferGuaranteeOutcome> =
  s.enumOf<TransferGuaranteeOutcome>(TransferGuaranteeOutcome);
