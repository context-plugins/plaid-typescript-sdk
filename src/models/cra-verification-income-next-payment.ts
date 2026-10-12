import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata of the income stream's next payment. */
export type CraVerificationIncomeNextPayment = {
  /**
   * The expected date of the income stream's next payment. The date will be returned in an ISO 8601
   * format (YYYY-MM-DD).
   */
  date: string;
};

export const craVerificationIncomeNextPaymentSchema: Schema<CraVerificationIncomeNextPayment> =
  s.object<CraVerificationIncomeNextPayment>({
    date: s.dateOnly(),
  });
