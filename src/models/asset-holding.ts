import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  assetHoldingRestrictedIndicatorSchema,
  type AssetHoldingRestrictedIndicator,
} from "./asset-holding-restricted-indicator.js";
import { assetHoldingTypeSchema, type AssetHoldingType } from "./asset-holding-type.js";

export type AssetHolding = {
  assetHoldingId: string | null;
  currency: string | null;
  assetHoldingDescription: string | null;
  assetHoldingSymbol: string | null;
  assetHoldingSecurityName: string | null;
  assetHoldingUnits: number | null;
  assetHoldingMarketValueAmount: number | null;
  assetHoldingCurrentPriceAmount: number | null;
  assetHoldingType: AssetHoldingType | null;
  assetHoldingRestrictedIndicator: AssetHoldingRestrictedIndicator | null;
  assetHoldingVestedAmount: number | null;
};

export const assetHoldingSchema: Schema<AssetHolding> = s.object<AssetHolding>({
  assetHoldingId: s.nullable(s.string()),
  currency: s.nullable(s.string()),
  assetHoldingDescription: s.nullable(s.string()),
  assetHoldingSymbol: s.nullable(s.string()),
  assetHoldingSecurityName: s.nullable(s.string()),
  assetHoldingUnits: s.nullable(s.number()),
  assetHoldingMarketValueAmount: s.nullable(s.number()),
  assetHoldingCurrentPriceAmount: s.nullable(s.number()),
  assetHoldingType: s.nullable(s.lazy(() => assetHoldingTypeSchema)),
  assetHoldingRestrictedIndicator: s.nullable(s.lazy(() => assetHoldingRestrictedIndicatorSchema)),
  assetHoldingVestedAmount: s.nullable(s.number()),
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
