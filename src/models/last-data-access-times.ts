import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastDataAccessTimes = {
  applicationId: string;
  accountBalanceInfo: Date | null;
  accountRoutingNumber: Date | null;
  contactDetails: Date | null;
  transactions: Date | null;
  creditAndLoans: Date | null;
  investments: Date | null;
  payrollInfo: Date | null;
  transactionRiskInfo: Date | null;
};

export const lastDataAccessTimesSchema: Schema<LastDataAccessTimes> = s.object<LastDataAccessTimes>({
  applicationId: s.string(),
  accountBalanceInfo: s.nullable(s.dateTime()),
  accountRoutingNumber: s.nullable(s.dateTime()),
  contactDetails: s.nullable(s.dateTime()),
  transactions: s.nullable(s.dateTime()),
  creditAndLoans: s.nullable(s.dateTime()),
  investments: s.nullable(s.dateTime()),
  payrollInfo: s.nullable(s.dateTime()),
  transactionRiskInfo: s.nullable(s.dateTime()),
  _keysMap: {
    applicationId: "application_id",
    accountBalanceInfo: "account_balance_info",
    accountRoutingNumber: "account_routing_number",
    contactDetails: "contact_details",
    creditAndLoans: "credit_and_loans",
    payrollInfo: "payroll_info",
    transactionRiskInfo: "transaction_risk_info",
  },
});
