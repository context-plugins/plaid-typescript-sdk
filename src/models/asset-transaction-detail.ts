import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetInvestmentTransactionTypeSchema,
  type AssetInvestmentTransactionType,
} from "./asset-investment-transaction-type.js";
import {
  assetTransactionCategoryTypeSchema,
  type AssetTransactionCategoryType,
} from "./asset-transaction-category-type.js";
import { assetTransactionTypeSchema, type AssetTransactionType } from "./asset-transaction-type.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetTransactionDetail = {
  /** A vendor created unique Identifier. */
  assetTransactionUniqueIdentifier: string;
  /** Asset Transaction Amount. */
  assetTransactionAmount: number;
  /** Asset Transaction Date. */
  assetTransactionDate: string;
  /** Asset Transaction Post Date. */
  assetTransactionPostDate: string;
  /** Asset Transaction Type. */
  assetTransactionType: AssetTransactionType;
  /** Asset Investment Transaction Type Enumerated derived by Vendor. */
  assetInvestmentTransactionType?: AssetInvestmentTransactionType | null;
  /** Populate with who did the transaction. */
  assetTransactionPaidByName: string | null;
  /** Populate with for whom the transaction is done */
  assetTransactionPaidToName?: string | null;
  /**
   * FI Provided - examples are atm, cash, check, credit, debit, deposit, directDebit,
   * directDeposit, dividend, fee, interest, other, payment, pointOfSale, repeatPayment,
   * serviceCharge, transfer.
   */
  assetTransactionTypeAdditionalDescription: string | null;
  /** Asset Investment Transaction Type Description. */
  assetInvestmentTransactionTypeDescription: string | null;
  /** Asset Transaction Category Type Enumerated derived by Vendor. */
  assetTransactionCategoryType: AssetTransactionCategoryType | null;
  /** FI provided Transaction Identifier. */
  financialInstitutionTransactionIdentifier: string | null;
};

export const assetTransactionDetailSchema: Schema<AssetTransactionDetail> = s.object<AssetTransactionDetail>({
  assetTransactionUniqueIdentifier: s.string(),
  assetTransactionAmount: s.float64(),
  assetTransactionDate: s.dateOnly(),
  assetTransactionPostDate: s.dateOnly(),
  assetTransactionType: assetTransactionTypeSchema,
  assetInvestmentTransactionType: s.optionalNullable(s.lazy(() => assetInvestmentTransactionTypeSchema)),
  assetTransactionPaidByName: s.nullable(s.string()),
  assetTransactionPaidToName: s.optionalNullable(s.string()),
  assetTransactionTypeAdditionalDescription: s.nullable(s.string()),
  assetInvestmentTransactionTypeDescription: s.nullable(s.string()),
  assetTransactionCategoryType: s.nullable(s.lazy(() => assetTransactionCategoryTypeSchema)),
  financialInstitutionTransactionIdentifier: s.nullable(s.string()),
  _keysMap: {
    assetTransactionUniqueIdentifier: "AssetTransactionUniqueIdentifier",
    assetTransactionAmount: "AssetTransactionAmount",
    assetTransactionDate: "AssetTransactionDate",
    assetTransactionPostDate: "AssetTransactionPostDate",
    assetTransactionType: "AssetTransactionType",
    assetInvestmentTransactionType: "AssetInvestmentTransactionType",
    assetTransactionPaidByName: "AssetTransactionPaidByName",
    assetTransactionPaidToName: "AssetTransactionPaidToName",
    assetTransactionTypeAdditionalDescription: "AssetTransactionTypeAdditionalDescription",
    assetInvestmentTransactionTypeDescription: "AssetInvestmentTransactionTypeDescription",
    assetTransactionCategoryType: "AssetTransactionCategoryType",
    financialInstitutionTransactionIdentifier: "FinancialInstitutionTransactionIdentifier",
  },
});
