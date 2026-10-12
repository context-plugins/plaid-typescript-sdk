import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The direction of the flow of transfer funds.
 *
 * `PAYMENT`: Transfers funds from an end user's account to your business account.
 *
 * `DISBURSEMENT`: Transfers funds from your business account to an end user's account.
 */
export const TransferIntentCreateMode = {
  Payment: "PAYMENT",
  Disbursement: "DISBURSEMENT",
} as const;
export type TransferIntentCreateMode =
  | (typeof TransferIntentCreateMode)[keyof typeof TransferIntentCreateMode]
  | (string & {});

export const transferIntentCreateModeSchema: EnumSchema<TransferIntentCreateMode> =
  s.enumOf<TransferIntentCreateMode>(TransferIntentCreateMode);
