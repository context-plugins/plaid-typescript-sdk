import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferRecurringNetwork = {
  Ach: "ach",
  SameDayAch: "same-day-ach",
  Rtp: "rtp",
} as const;
export type TransferRecurringNetwork =
  | (typeof TransferRecurringNetwork)[keyof typeof TransferRecurringNetwork]
  | (string & {});

export const transferRecurringNetworkSchema: EnumSchema<TransferRecurringNetwork> =
  s.enumOf<TransferRecurringNetwork>(TransferRecurringNetwork);
