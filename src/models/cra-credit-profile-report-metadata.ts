import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Metadata about the CRA Credit Profile Report. */
export type CraCreditProfileReportMetadata = {
  /** The number of items used to calculate the report. */
  itemCount: number;
  /** The institution IDs associated with the report. */
  institutionIds: string[];
  /** The total number of accounts in the report. */
  accountCount: number;
  /** The number of primary accounts in the report. */
  primaryAccountCount: number;
  /** The number of depository accounts in the report. */
  depositoryAccountTypeCount: number;
  /** The number of credit accounts in the report. */
  creditAccountTypeCount: number;
  /** The number of other accounts in the report. */
  otherAccountTypeCount: number;
  /** The number of accounts with multiple owners in the report. */
  multipleOwnerAccountCount: number;
  /** The time when the report was generated. */
  generatedAt: Date;
  /** The date of the oldest transaction in the report. */
  oldestTransactionDate: string;
  /** The date of the most recent transaction in the report. */
  mostRecentTransactionDate: string;
};

export const craCreditProfileReportMetadataSchema: Schema<CraCreditProfileReportMetadata> =
  s.object<CraCreditProfileReportMetadata>({
    itemCount: s.int(),
    institutionIds: s.array(s.string()),
    accountCount: s.int(),
    primaryAccountCount: s.int(),
    depositoryAccountTypeCount: s.int(),
    creditAccountTypeCount: s.int(),
    otherAccountTypeCount: s.int(),
    multipleOwnerAccountCount: s.int(),
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
