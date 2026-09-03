import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  creditBankIncomeCategorySchema,
  type CreditBankIncomeCategory,
} from "./credit-bank-income-category.js";

export type MonitoringIncomeSource = {
  incomeSourceId: string;
  incomeDescription: string;
  incomeCategory: CreditBankIncomeCategory;
  lastTransactionDate: string;
};

export const monitoringIncomeSourceSchema: Schema<MonitoringIncomeSource> = s.object<MonitoringIncomeSource>({
  incomeSourceId: s.string(),
  incomeDescription: s.string(),
  incomeCategory: creditBankIncomeCategorySchema,
  lastTransactionDate: s.dateOnly(),
  _keysMap: {
    incomeSourceId: "income_source_id",
    incomeDescription: "income_description",
    incomeCategory: "income_category",
    lastTransactionDate: "last_transaction_date",
  },
});
