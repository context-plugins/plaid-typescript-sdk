import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Details regarding authorization usage. */
export type TransferMetricsGetAuthorizationUsage = {
  /** The daily credit utilization formatted as a decimal. */
  dailyCreditUtilization?: string;
  /** The daily debit utilization formatted as a decimal. */
  dailyDebitUtilization?: string;
  /** The monthly credit utilization formatted as a decimal. */
  monthlyCreditUtilization?: string;
  /** The monthly debit utilization formatted as a decimal. */
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
