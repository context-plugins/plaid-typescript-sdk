import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a return on a Guaranteed ACH transfer that is included in the specified repayment. */
export type TransferRepaymentReturn = {
  /** The unique identifier of the guaranteed transfer that was returned. */
  transferId: string;
  /** The unique identifier of the corresponding `returned` transfer event. */
  eventId: number;
  /** The value of the returned transfer. */
  amount: string;
  /** The currency of the repayment, e.g. "USD". */
  isoCurrencyCode: string;
};

export const transferRepaymentReturnSchema: Schema<TransferRepaymentReturn> =
  s.object<TransferRepaymentReturn>({
    transferId: s.string(),
    eventId: s.int(),
    amount: s.string(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      transferId: "transfer_id",
      eventId: "event_id",
      isoCurrencyCode: "iso_currency_code",
    },
  });
