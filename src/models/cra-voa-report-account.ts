import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import { baseReportInvestmentsSchema, type BaseReportInvestments } from "./base-report-investments.js";
import { consumerDisputeSchema, type ConsumerDispute } from "./consumer-dispute.js";
import {
  craVoaReportAccountBalancesSchema,
  type CraVoaReportAccountBalances,
} from "./cra-voa-report-account-balances.js";
import {
  craVoaReportTransactionsInsightsSchema,
  type CraVoaReportTransactionsInsights,
} from "./cra-voa-report-transactions-insights.js";
import { ownerSchema, type Owner } from "./owner.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";

export type CraVoaReportAccount = {
  accountId: string;
  balances: CraVoaReportAccountBalances;
  consumerDisputes: ConsumerDispute[];
  mask: string | null;
  name: string;
  officialName: string | null;
  type: AccountType;
  subtype: AccountSubtype | null;
  daysAvailable: number;
  transactionsInsights: CraVoaReportTransactionsInsights;
  owners: Owner[];
  ownershipType: OwnershipType | null;
  investments?: BaseReportInvestments | null;
};

export const craVoaReportAccountSchema: Schema<CraVoaReportAccount> = s.object<CraVoaReportAccount>({
  accountId: s.string(),
  balances: craVoaReportAccountBalancesSchema,
  consumerDisputes: s.array(s.lazy(() => consumerDisputeSchema)),
  mask: s.nullable(s.string()),
  name: s.string(),
  officialName: s.nullable(s.string()),
  type: accountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  daysAvailable: s.number(),
  transactionsInsights: craVoaReportTransactionsInsightsSchema,
  owners: s.array(s.lazy(() => ownerSchema)),
  ownershipType: s.nullable(s.lazy(() => ownershipTypeSchema)),
  investments: s.optionalNullable(s.lazy(() => baseReportInvestmentsSchema)),
  _keysMap: {
    accountId: "account_id",
    consumerDisputes: "consumer_disputes",
    officialName: "official_name",
    daysAvailable: "days_available",
    transactionsInsights: "transactions_insights",
    ownershipType: "ownership_type",
  },
});
