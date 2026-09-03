import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  baseReportAccountBalancesSchema,
  type BaseReportAccountBalances,
} from "./base-report-account-balances.js";
import {
  baseReportAccountInsightsSchema,
  type BaseReportAccountInsights,
} from "./base-report-account-insights.js";
import {
  baseReportAccountMetadataSchema,
  type BaseReportAccountMetadata,
} from "./base-report-account-metadata.js";
import { baseReportAttributesSchema, type BaseReportAttributes } from "./base-report-attributes.js";
import {
  baseReportHistoricalBalanceSchema,
  type BaseReportHistoricalBalance,
} from "./base-report-historical-balance.js";
import { baseReportTransactionSchema, type BaseReportTransaction } from "./base-report-transaction.js";
import { consumerDisputeSchema, type ConsumerDispute } from "./consumer-dispute.js";
import { ownerSchema, type Owner } from "./owner.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";

export type BaseReportAccount = {
  accountId: string;
  balances: BaseReportAccountBalances;
  consumerDisputes: ConsumerDispute[];
  mask: string | null;
  metadata: BaseReportAccountMetadata;
  name: string;
  officialName: string | null;
  type: AccountType;
  subtype: AccountSubtype | null;
  daysAvailable: number;
  transactions: BaseReportTransaction[];
  owners: Owner[];
  ownershipType: OwnershipType | null;
  historicalBalances?: BaseReportHistoricalBalance[];
  accountInsights?: BaseReportAccountInsights;
  attributes?: BaseReportAttributes;
};

export const baseReportAccountSchema: Schema<BaseReportAccount> = s.object<BaseReportAccount>({
  accountId: s.string(),
  balances: baseReportAccountBalancesSchema,
  consumerDisputes: s.array(s.lazy(() => consumerDisputeSchema)),
  mask: s.nullable(s.string()),
  metadata: baseReportAccountMetadataSchema,
  name: s.string(),
  officialName: s.nullable(s.string()),
  type: accountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  daysAvailable: s.number(),
  transactions: s.array(s.lazy(() => baseReportTransactionSchema)),
  owners: s.array(s.lazy(() => ownerSchema)),
  ownershipType: s.nullable(s.lazy(() => ownershipTypeSchema)),
  historicalBalances: s.optional(s.array(s.lazy(() => baseReportHistoricalBalanceSchema))),
  accountInsights: s.optional(s.lazy(() => baseReportAccountInsightsSchema)),
  attributes: s.optional(s.lazy(() => baseReportAttributesSchema)),
  _keysMap: {
    accountId: "account_id",
    consumerDisputes: "consumer_disputes",
    officialName: "official_name",
    daysAvailable: "days_available",
    ownershipType: "ownership_type",
    historicalBalances: "historical_balances",
    accountInsights: "account_insights",
  },
});
