import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The originator's expected transfer frequency. */
export const OriginatorExpectedTransferFrequency = {
  OncePerMonth: "once_per_month",
  TwicePerMonth: "twice_per_month",
  OncePerWeek: "once_per_week",
  Daily: "daily",
} as const;
export type OriginatorExpectedTransferFrequency =
  | (typeof OriginatorExpectedTransferFrequency)[keyof typeof OriginatorExpectedTransferFrequency]
  | (string & {});

export const originatorExpectedTransferFrequencySchema: EnumSchema<OriginatorExpectedTransferFrequency> =
  s.enumOf<OriginatorExpectedTransferFrequency>(OriginatorExpectedTransferFrequency);
