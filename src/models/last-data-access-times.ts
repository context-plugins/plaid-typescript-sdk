import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the last time each datatype was accessed by an application. */
export type LastDataAccessTimes = {
  /** ID of the application accessing data. */
  applicationId: string;
  /**
   * The last time `account_balance_info` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  accountBalanceInfo: Date | null;
  /**
   * The last time `account_routing_number` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  accountRoutingNumber: Date | null;
  /**
   * The last time `contact_details` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  contactDetails: Date | null;
  /**
   * The last time `transactions` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  transactions: Date | null;
  /**
   * The last time `credit_and_loans` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  creditAndLoans: Date | null;
  /**
   * The last time `investments` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  investments: Date | null;
  /**
   * The last time `payroll_info` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
  payrollInfo: Date | null;
  /**
   * The last time `transaction_risk_info` was accessed by this application in [ISO
   * 8601](https://wikipedia.org/wiki/ISO_8601) format in UTC. null if never accessed.
   */
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
