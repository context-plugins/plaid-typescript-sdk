import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TransferStatus = {
  Pending: "pending",
  Posted: "posted",
  Settled: "settled",
  FundsAvailable: "funds_available",
  Cancelled: "cancelled",
  Failed: "failed",
  Returned: "returned",
} as const;
export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus] | (string & {});

export const transferStatusSchema: EnumSchema<TransferStatus> = s.enumOf<TransferStatus>(TransferStatus);
