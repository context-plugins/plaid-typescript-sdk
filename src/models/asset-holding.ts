import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetHoldingRestrictedIndicatorSchema,
  type AssetHoldingRestrictedIndicator,
} from "./asset-holding-restricted-indicator.js";
import { assetHoldingTypeSchema, type AssetHoldingType } from "./asset-holding-type.js";

/** Documentation not found in the MISMO model viewer and not provided by Freddie Mac. */
export type AssetHolding = {
  /** Unique id of investment position */
  assetHoldingId: string | null;
  /** US Dollar */
  currency: string | null;
  /** Description of holding */
  assetHoldingDescription: string | null;
  /** Investment position's market ticker symbol */
  assetHoldingSymbol: string | null;
  /** Security name of investment holding */
  assetHoldingSecurityName: string | null;
  /** Number of units of holding */
  assetHoldingUnits: number | null;
  /** market value of investment position */
  assetHoldingMarketValueAmount: number | null;
  /** current price of investment holding */
  assetHoldingCurrentPriceAmount: number | null;
  /** Type of holding (e.g. bond, stock, crypto, other) */
  assetHoldingType: AssetHoldingType | null;
  /** Whether or not the stock is restricted, i.e. "Restricted" or "Not Restricted" */
  assetHoldingRestrictedIndicator: AssetHoldingRestrictedIndicator | null;
  /** Amount of holding vested */
  assetHoldingVestedAmount: number | null;
};

export const assetHoldingSchema: Schema<AssetHolding> = s.object<AssetHolding>({
  assetHoldingId: s.nullable(s.string()),
  currency: s.nullable(s.string()),
  assetHoldingDescription: s.nullable(s.string()),
  assetHoldingSymbol: s.nullable(s.string()),
  assetHoldingSecurityName: s.nullable(s.string()),
  assetHoldingUnits: s.nullable(s.float64()),
  assetHoldingMarketValueAmount: s.nullable(s.float64()),
  assetHoldingCurrentPriceAmount: s.nullable(s.float64()),
  assetHoldingType: s.nullable(s.lazy(() => assetHoldingTypeSchema)),
  assetHoldingRestrictedIndicator: s.nullable(s.lazy(() => assetHoldingRestrictedIndicatorSchema)),
  assetHoldingVestedAmount: s.nullable(s.float64()),
  _keysMap: {
    assetHoldingId: "AssetHoldingID",
    currency: "Currency",
    assetHoldingDescription: "AssetHoldingDescription",
    assetHoldingSymbol: "AssetHoldingSymbol",
    assetHoldingSecurityName: "AssetHoldingSecurityName",
    assetHoldingUnits: "AssetHoldingUnits",
    assetHoldingMarketValueAmount: "AssetHoldingMarketValueAmount",
    assetHoldingCurrentPriceAmount: "AssetHoldingCurrentPriceAmount",
    assetHoldingType: "AssetHoldingType",
    assetHoldingRestrictedIndicator: "AssetHoldingRestrictedIndicator",
    assetHoldingVestedAmount: "AssetHoldingVestedAmount",
  },
});
