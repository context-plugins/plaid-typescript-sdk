import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FdxDataCluster = {
  AccountBasic: "ACCOUNT_BASIC",
  AccountDetailed: "ACCOUNT_DETAILED",
  AccountPayments: "ACCOUNT_PAYMENTS",
  Bills: "BILLS",
  CustomerContact: "CUSTOMER_CONTACT",
  CustomerPersonal: "CUSTOMER_PERSONAL",
  Images: "IMAGES",
  Investments: "INVESTMENTS",
  Notifications: "NOTIFICATIONS",
  PaymentSupport: "PAYMENT_SUPPORT",
  Rewards: "REWARDS",
  Statements: "STATEMENTS",
  Tax: "TAX",
  Transactions: "TRANSACTIONS",
  Balances: "BALANCES",
  ScheduledPayments: "SCHEDULED_PAYMENTS",
} as const;
export type FdxDataCluster = (typeof FdxDataCluster)[keyof typeof FdxDataCluster] | (string & {});

export const fdxDataClusterSchema: EnumSchema<FdxDataCluster> = s.enumOf<FdxDataCluster>(FdxDataCluster);
