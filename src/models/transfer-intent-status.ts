import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The status of the transfer intent.
 *
 * `PENDING`: The transfer intent is pending. `SUCCEEDED`: The transfer intent was successfully
 * created. `FAILED`: The transfer intent was unable to be created.
 */
export const TransferIntentStatus = {
  Pending: "PENDING",
  Succeeded: "SUCCEEDED",
  Failed: "FAILED",
} as const;
export type TransferIntentStatus =
  | (typeof TransferIntentStatus)[keyof typeof TransferIntentStatus]
  | (string & {});

export const transferIntentStatusSchema: EnumSchema<TransferIntentStatus> =
  s.enumOf<TransferIntentStatus>(TransferIntentStatus);
