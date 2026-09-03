import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraIncomeNextPayment = {
  date: string;
};

export const craIncomeNextPaymentSchema: Schema<CraIncomeNextPayment> = s.object<CraIncomeNextPayment>({
  date: s.dateOnly(),
});
