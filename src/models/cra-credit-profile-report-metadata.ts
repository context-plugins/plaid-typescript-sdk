import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CraCreditProfileReportMetadata = {
  itemCount: number;
  institutionIds: string[];
  accountCount: number;
  primaryAccountCount: number;
  depositoryAccountTypeCount: number;
  creditAccountTypeCount: number;
  otherAccountTypeCount: number;
  multipleOwnerAccountCount: number;
  generatedAt: Date;
  oldestTransactionDate: string;
  mostRecentTransactionDate: string;
};

export const craCreditProfileReportMetadataSchema: Schema<CraCreditProfileReportMetadata> =
  s.object<CraCreditProfileReportMetadata>({
    itemCount: s.number(),
    institutionIds: s.array(s.string()),
    accountCount: s.number(),
    primaryAccountCount: s.number(),
    depositoryAccountTypeCount: s.number(),
    creditAccountTypeCount: s.number(),
    otherAccountTypeCount: s.number(),
    multipleOwnerAccountCount: s.number(),
    generatedAt: s.dateTime(),
    oldestTransactionDate: s.dateOnly(),
    mostRecentTransactionDate: s.dateOnly(),
    _keysMap: {
      itemCount: "item_count",
      institutionIds: "institution_ids",
      accountCount: "account_count",
      primaryAccountCount: "primary_account_count",
      depositoryAccountTypeCount: "depository_account_type_count",
      creditAccountTypeCount: "credit_account_type_count",
      otherAccountTypeCount: "other_account_type_count",
      multipleOwnerAccountCount: "multiple_owner_account_count",
      generatedAt: "generated_at",
      oldestTransactionDate: "oldest_transaction_date",
      mostRecentTransactionDate: "most_recent_transaction_date",
    },
  });
