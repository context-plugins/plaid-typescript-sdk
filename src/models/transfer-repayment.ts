import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferRepayment = {
  repaymentId: string;
  created: Date;
  amount: string;
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
