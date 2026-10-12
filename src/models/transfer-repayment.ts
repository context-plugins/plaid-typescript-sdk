import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * A repayment is created automatically after one or more guaranteed transactions receive a return.
 * If there are multiple eligible returns in a day, they are batched together into a single
 * repayment.
 *
 * Repayments are sent over ACH, with funds typically available on the next banking day.
 */
export type TransferRepayment = {
  /** Identifier of the repayment. */
  repaymentId: string;
  /** The datetime when the repayment occurred, in RFC 3339 format. */
  created: Date;
  /** Decimal amount of the repayment as it appears on your account ledger. */
  amount: string;
  /** The currency of the repayment, e.g. "USD". */
  isoCurrencyCode: string;
};

export const transferRepaymentSchema: Schema<TransferRepayment> = s.object<TransferRepayment>({
  repaymentId: s.string(),
  created: s.dateTime(),
  amount: s.string(),
  isoCurrencyCode: s.string(),
  _keysMap: {
    repaymentId: "repayment_id",
    isoCurrencyCode: "iso_currency_code",
  },
});
