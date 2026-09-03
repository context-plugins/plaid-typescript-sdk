import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UserBasedProducts = {
  CraBaseReport: "cra_base_report",
  CraIncomeInsights: "cra_income_insights",
  CraPartnerInsights: "cra_partner_insights",
  CraNetworkInsights: "cra_network_insights",
  CraCashflowInsights: "cra_cashflow_insights",
  CraMonitoring: "cra_monitoring",
  CraLendScore: "cra_lend_score",
  CraPlaidCreditScore: "cra_plaid_credit_score",
  Investments: "investments",
  Liabilities: "liabilities",
  ProtectLinkedBank: "protect_linked_bank",
  ProtectTransactions: "protect_transactions",
  Transactions: "transactions",
} as const;
export type UserBasedProducts = (typeof UserBasedProducts)[keyof typeof UserBasedProducts] | (string & {});

export const userBasedProductsSchema: EnumSchema<UserBasedProducts> =
  s.enumOf<UserBasedProducts>(UserBasedProducts);
