import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetEmployerSponsoredIndicatorSchema,
  type AssetEmployerSponsoredIndicator,
} from "./asset-employer-sponsored-indicator.js";
import {
  assetRetirementIndicatorSchema,
  type AssetRetirementIndicator,
} from "./asset-retirement-indicator.js";
import { assetTypeSchema, type AssetType } from "./asset-type.js";

export type AssetDetail = {
  assetUniqueIdentifier: string;
  assetAccountIdentifier: string;
  assetAsOfDate: string;
  assetDescription: string | null;
  assetAvailableBalanceAmount: number;
  assetCurrentBalanceAmount: number;
  assetHoldingBalanceAmount?: number | null;
  assetHoldingBalanceNetMarginAmount?: number | null;
  assetBondsBalanceAmount?: number | null;
  assetStocksBalanceAmount?: number | null;
  assetCryptoBalanceAmount?: number | null;
  assetOtherBalanceAmount?: number | null;
  assetMarginAmountBalance?: number | null;
  assetAvailableCashBalanceAmount?: number | null;
  assetCashBalanceAmount?: number | null;
  assetType: AssetType;
  assetTypeAdditionalDescription: string | null;
  assetDaysRequestedCount: number;
  assetOwnershipType: string | null;
  assetRetirementIndicator?: AssetRetirementIndicator | null;
  assetEmployerSponsoredIndicator?: AssetEmployerSponsoredIndicator | null;
};

export const assetDetailSchema: Schema<AssetDetail> = s.object<AssetDetail>({
  assetUniqueIdentifier: s.string(),
  assetAccountIdentifier: s.string(),
  assetAsOfDate: s.string(),
  assetDescription: s.nullable(s.string()),
  assetAvailableBalanceAmount: s.number(),
  assetCurrentBalanceAmount: s.number(),
  assetHoldingBalanceAmount: s.optionalNullable(s.number()),
  assetHoldingBalanceNetMarginAmount: s.optionalNullable(s.number()),
  assetBondsBalanceAmount: s.optionalNullable(s.number()),
  assetStocksBalanceAmount: s.optionalNullable(s.number()),
  assetCryptoBalanceAmount: s.optionalNullable(s.number()),
  assetOtherBalanceAmount: s.optionalNullable(s.number()),
  assetMarginAmountBalance: s.optionalNullable(s.number()),
  assetAvailableCashBalanceAmount: s.optionalNullable(s.number()),
  assetCashBalanceAmount: s.optionalNullable(s.number()),
  assetType: assetTypeSchema,
  assetTypeAdditionalDescription: s.nullable(s.string()),
  assetDaysRequestedCount: s.number(),
  assetOwnershipType: s.nullable(s.string()),
  assetRetirementIndicator: s.optionalNullable(s.lazy(() => assetRetirementIndicatorSchema)),
  assetEmployerSponsoredIndicator: s.optionalNullable(s.lazy(() => assetEmployerSponsoredIndicatorSchema)),
  _keysMap: {
    assetUniqueIdentifier: "AssetUniqueIdentifier",
    assetAccountIdentifier: "AssetAccountIdentifier",
    assetAsOfDate: "AssetAsOfDate",
    assetDescription: "AssetDescription",
    assetAvailableBalanceAmount: "AssetAvailableBalanceAmount",
    assetCurrentBalanceAmount: "AssetCurrentBalanceAmount",
    assetHoldingBalanceAmount: "AssetHoldingBalanceAmount",
    assetHoldingBalanceNetMarginAmount: "AssetHoldingBalanceNetMarginAmount",
    assetBondsBalanceAmount: "AssetBondsBalanceAmount",
    assetStocksBalanceAmount: "AssetStocksBalanceAmount",
    assetCryptoBalanceAmount: "AssetCryptoBalanceAmount",
    assetOtherBalanceAmount: "AssetOtherBalanceAmount",
    assetMarginAmountBalance: "AssetMarginAmountBalance",
    assetAvailableCashBalanceAmount: "AssetAvailableCashBalanceAmount",
    assetCashBalanceAmount: "AssetCashBalanceAmount",
    assetType: "AssetType",
    assetTypeAdditionalDescription: "AssetTypeAdditionalDescription",
    assetDaysRequestedCount: "AssetDaysRequestedCount",
    assetOwnershipType: "AssetOwnershipType",
    assetRetirementIndicator: "AssetRetirementIndicator",
    assetEmployerSponsoredIndicator: "AssetEmployerSponsoredIndicator",
  },
});
