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

/** Details about an asset. */
export type AssetDetail = {
  /** A vendor created unique Identifier. */
  assetUniqueIdentifier: string;
  /** A unique alphanumeric string identifying an asset. */
  assetAccountIdentifier: string;
  /** Account Report As of Date / Create Date. Format YYYY-MM-DD */
  assetAsOfDate: string;
  /**
   * A text description that further defines the Asset. This could be used to describe the shares
   * associated with the stocks, bonds or mutual funds, retirement funds or business owned that the
   * borrower has disclosed (named) as an asset.
   */
  assetDescription: string | null;
  /** Asset Account Available Balance. */
  assetAvailableBalanceAmount: number;
  /** Asset Account Current Balance. */
  assetCurrentBalanceAmount: number;
  /**
   * Total market value of holdings (non-restricted, vested, not crypto, not other, not cash) Note:
   * Any employer stock plan balance must be excluded from the total account balance (identification
   * is 'stock plan')
   */
  assetHoldingBalanceAmount?: number | null;
  /** HoldingsBalance net MarginAmount */
  assetHoldingBalanceNetMarginAmount?: number | null;
  /** Total market value of all bonds held (non-restricted, vested) */
  assetBondsBalanceAmount?: number | null;
  /**
   * Total market value of all stocks held (non-restricted, vested, not employer sponsored stock
   * plan)
   */
  assetStocksBalanceAmount?: number | null;
  /** Total balance of all cryptocurrency held (non-restricted, vested) */
  assetCryptoBalanceAmount?: number | null;
  /** Total balance of all other holding types (non-restricted, vested) */
  assetOtherBalanceAmount?: number | null;
  /** loan balance (amount owed by account owner) */
  assetMarginAmountBalance?: number | null;
  /** amount available for cash withdrawal */
  assetAvailableCashBalanceAmount?: number | null;
  /** cash balance of the account */
  assetCashBalanceAmount?: number | null;
  /**
   * A value from a MISMO prescribed list that specifies financial assets in a mortgage loan
   * transaction. Assets may be either liquid or fixed and are associated with a corresponding asset
   * amount.
   */
  assetType: AssetType;
  /**
   * Additional Asset Description. Some examples are Investment Tax-Deferred, Loan, 401K, 403B,
   * Checking, Money Market, Credit Card, ROTH, 529, Biller, ROLLOVER, CD, Savings, Investment
   * Taxable, IRA, Mortgage, Line Of Credit.
   */
  assetTypeAdditionalDescription: string | null;
  /**
   * The number of days requested from the Financial Institution. Example: When looking for 3 months
   * of data from the FI, pass in 90 days.
   */
  assetDaysRequestedCount: number;
  /** Ownership type of the asset account. */
  assetOwnershipType: string | null;
  /**
   * Whether or not the account is a retirement account (e.g., 401K, 403b, 457, thrift savings
   * plans, traditional and Roth, IRAs, SEP-IRA, SIMPLE-IRA, KEOGH, state retirement savings plans,
   * other independent and IRS-qualified employer retirement plans)
   */
  assetRetirementIndicator?: AssetRetirementIndicator | null;
  /**
   * Whether the account is employer sponsored retirement account or not (e.g., 401K, 403b, 457,
   * thrift savings plan)
   */
  assetEmployerSponsoredIndicator?: AssetEmployerSponsoredIndicator | null;
};

export const assetDetailSchema: Schema<AssetDetail> = s.object<AssetDetail>({
  assetUniqueIdentifier: s.string(),
  assetAccountIdentifier: s.string(),
  assetAsOfDate: s.string(),
  assetDescription: s.nullable(s.string()),
  assetAvailableBalanceAmount: s.float64(),
  assetCurrentBalanceAmount: s.float64(),
  assetHoldingBalanceAmount: s.optionalNullable(s.float64()),
  assetHoldingBalanceNetMarginAmount: s.optionalNullable(s.float64()),
  assetBondsBalanceAmount: s.optionalNullable(s.float64()),
  assetStocksBalanceAmount: s.optionalNullable(s.float64()),
  assetCryptoBalanceAmount: s.optionalNullable(s.float64()),
  assetOtherBalanceAmount: s.optionalNullable(s.float64()),
  assetMarginAmountBalance: s.optionalNullable(s.float64()),
  assetAvailableCashBalanceAmount: s.optionalNullable(s.float64()),
  assetCashBalanceAmount: s.optionalNullable(s.float64()),
  assetType: assetTypeSchema,
  assetTypeAdditionalDescription: s.nullable(s.string()),
  assetDaysRequestedCount: s.int(),
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
