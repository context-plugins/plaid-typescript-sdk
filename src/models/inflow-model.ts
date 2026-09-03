import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type InflowModel = {
  type: string;
  incomeAmount: number;
  paymentDayOfMonth: number;
  transactionName: string;
  statementDayOfMonth: string;
};

export const inflowModelSchema: Schema<InflowModel> = s.object<InflowModel>({
  type: s.string(),
  incomeAmount: s.number(),
  paymentDayOfMonth: s.number(),
  transactionName: s.string(),
  statementDayOfMonth: s.string(),
  _keysMap: {
    incomeAmount: "income_amount",
    paymentDayOfMonth: "payment_day_of_month",
    transactionName: "transaction_name",
    statementDayOfMonth: "statement_day_of_month",
  },
});
