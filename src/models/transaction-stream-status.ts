import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionStreamStatus = {
  Unknown: "UNKNOWN",
  Mature: "MATURE",
  EarlyDetection: "EARLY_DETECTION",
  Tombstoned: "TOMBSTONED",
} as const;
export type TransactionStreamStatus =
  | (typeof TransactionStreamStatus)[keyof typeof TransactionStreamStatus]
  | (string & {});

export const transactionStreamStatusSchema: EnumSchema<TransactionStreamStatus> =
  s.enumOf<TransactionStreamStatus>(TransactionStreamStatus);
