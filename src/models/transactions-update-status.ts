import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransactionsUpdateStatus = {
  TransactionsUpdateStatusUnknown: "TRANSACTIONS_UPDATE_STATUS_UNKNOWN",
  NotReady: "NOT_READY",
  InitialUpdateComplete: "INITIAL_UPDATE_COMPLETE",
  HistoricalUpdateComplete: "HISTORICAL_UPDATE_COMPLETE",
} as const;
export type TransactionsUpdateStatus =
  | (typeof TransactionsUpdateStatus)[keyof typeof TransactionsUpdateStatus]
  | (string & {});

export const transactionsUpdateStatusSchema: EnumSchema<TransactionsUpdateStatus> =
  s.enumOf<TransactionsUpdateStatus>(TransactionsUpdateStatus);
