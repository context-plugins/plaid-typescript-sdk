import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraVerificationIncomeNextPayment = {
  date: string;
};

export const craVerificationIncomeNextPaymentSchema: Schema<CraVerificationIncomeNextPayment> =
  s.object<CraVerificationIncomeNextPayment>({
    date: s.dateOnly(),
  });
