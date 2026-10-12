import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferBalanceTypeSchema, type TransferBalanceType } from "./transfer-balance-type.js";

/** Information about the balance held with Plaid. */
export type TransferBalance = {
  /**
   * The amount of this balance available for use (decimal string with two digits of precision e.g.
   * "10.00").
   */
  available: string;
  /**
   * The available balance, plus the amount of pending funds that are in processing (decimal string
   * with two digits of precision e.g. "10.00").
   */
  current?: string;
  /**
   * The type of balance.
   *
   * `prefunded_rtp_credits` - Your prefunded RTP credit balance with Plaid `prefunded_ach_credits`
   * - Your prefunded ACH credit balance with Plaid
   */
  type: TransferBalanceType;
};

export const transferBalanceSchema: Schema<TransferBalance> = s.object<TransferBalance>({
  available: s.string(),
  current: s.optional(s.string()),
  type: transferBalanceTypeSchema,
});
