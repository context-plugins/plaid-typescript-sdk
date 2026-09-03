import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferAchNetwork = {
  Ach: "ach",
  SameDayAch: "same-day-ach",
} as const;
export type TransferAchNetwork = (typeof TransferAchNetwork)[keyof typeof TransferAchNetwork] | (string & {});

export const transferAchNetworkSchema: EnumSchema<TransferAchNetwork> =
  s.enumOf<TransferAchNetwork>(TransferAchNetwork);
