import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRepaymentReturn = {
  transferId: string;
  eventId: number;
  amount: string;
  isoCurrencyCode: string;
};

export const transferRepaymentReturnSchema: Schema<TransferRepaymentReturn> =
  s.object<TransferRepaymentReturn>({
    transferId: s.string(),
    eventId: s.number(),
    amount: s.string(),
    isoCurrencyCode: s.string(),
    _keysMap: {
      transferId: "transfer_id",
      eventId: "event_id",
      isoCurrencyCode: "iso_currency_code",
    },
  });
