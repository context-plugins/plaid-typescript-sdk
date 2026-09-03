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

export type AssetTransactionDetail = {
  assetTransactionUniqueIdentifier: string;
  assetTransactionAmount: number;
  assetTransactionDate: string;
  assetTransactionPostDate: string;
  assetTransactionType: AssetTransactionType;
  assetInvestmentTransactionType?: AssetInvestmentTransactionType | null;
  assetTransactionPaidByName: string | null;
  assetTransactionPaidToName?: string | null;
  assetTransactionTypeAdditionalDescription: string | null;
  assetInvestmentTransactionTypeDescription: string | null;
  assetTransactionCategoryType: AssetTransactionCategoryType | null;
  financialInstitutionTransactionIdentifier: string | null;
};

export const assetTransactionDetailSchema: Schema<AssetTransactionDetail> = s.object<AssetTransactionDetail>({
  assetTransactionUniqueIdentifier: s.string(),
  assetTransactionAmount: s.number(),
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
