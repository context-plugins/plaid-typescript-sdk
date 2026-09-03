import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferMetricsGetAuthorizationUsage = {
  dailyCreditUtilization?: string;
  dailyDebitUtilization?: string;
  monthlyCreditUtilization?: string;
  monthlyDebitUtilization?: string;
};

export const transferMetricsGetAuthorizationUsageSchema: Schema<TransferMetricsGetAuthorizationUsage> =
  s.object<TransferMetricsGetAuthorizationUsage>({
    dailyCreditUtilization: s.optional(s.string()),
    dailyDebitUtilization: s.optional(s.string()),
    monthlyCreditUtilization: s.optional(s.string()),
    monthlyDebitUtilization: s.optional(s.string()),
    _keysMap: {
      dailyCreditUtilization: "daily_credit_utilization",
      dailyDebitUtilization: "daily_debit_utilization",
      monthlyCreditUtilization: "monthly_credit_utilization",
      monthlyDebitUtilization: "monthly_debit_utilization",
    },
  });
