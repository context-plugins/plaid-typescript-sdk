import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accountInsightsSchema, type AccountInsights } from "./account-insights.js";
import { accountSubtypeSchema, type AccountSubtype } from "./account-subtype.js";
import { accountTypeSchema, type AccountType } from "./account-type.js";
import {
  assetReportAccountBalanceSchema,
  type AssetReportAccountBalance,
} from "./asset-report-account-balance.js";
import { assetReportInvestmentsSchema, type AssetReportInvestments } from "./asset-report-investments.js";
import { assetReportTransactionSchema, type AssetReportTransaction } from "./asset-report-transaction.js";
import { historicalBalanceSchema, type HistoricalBalance } from "./historical-balance.js";
import { ownerSchema, type Owner } from "./owner.js";
import { ownershipTypeSchema, type OwnershipType } from "./ownership-type.js";
import { verificationStatus4Schema, type VerificationStatus4 } from "./verification-status4.js";

export type AccountAssets = {
  accountId: string;
  balances: AssetReportAccountBalance;
  mask: string | null;
  name: string;
  officialName: string | null;
  type: AccountType;
  subtype: AccountSubtype | null;
  verificationStatus?: VerificationStatus4;
  persistentAccountId?: string;
  daysAvailable: number;
  transactions: AssetReportTransaction[];
  investments?: AssetReportInvestments;
  owners: Owner[];
  ownershipType?: OwnershipType | null;
  historicalBalances: HistoricalBalance[];
  accountInsights?: AccountInsights | null;
};

export const accountAssetsSchema: Schema<AccountAssets> = s.object<AccountAssets>({
  accountId: s.string(),
  balances: assetReportAccountBalanceSchema,
  mask: s.nullable(s.string()),
  name: s.string(),
  officialName: s.nullable(s.string()),
  type: accountTypeSchema,
  subtype: s.nullable(s.lazy(() => accountSubtypeSchema)),
  verificationStatus: s.optional(s.lazy(() => verificationStatus4Schema)),
  persistentAccountId: s.optional(s.string()),
  daysAvailable: s.number(),
  transactions: s.array(s.lazy(() => assetReportTransactionSchema)),
  investments: s.optional(s.lazy(() => assetReportInvestmentsSchema)),
  owners: s.array(s.lazy(() => ownerSchema)),
  ownershipType: s.optionalNullable(s.lazy(() => ownershipTypeSchema)),
  historicalBalances: s.array(s.lazy(() => historicalBalanceSchema)),
  accountInsights: s.optionalNullable(s.lazy(() => accountInsightsSchema)),
  _keysMap: {
    accountId: "account_id",
    officialName: "official_name",
    verificationStatus: "verification_status",
    persistentAccountId: "persistent_account_id",
    daysAvailable: "days_available",
    ownershipType: "ownership_type",
    historicalBalances: "historical_balances",
    accountInsights: "account_insights",
  },
});
