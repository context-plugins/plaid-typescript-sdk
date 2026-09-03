import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { securityOverrideSchema, type SecurityOverride } from "./security-override.js";

export type HoldingsOverride = {
  institutionPrice: number;
  institutionPriceAsOf?: string;
  costBasis?: number;
  quantity: number;
  currency: string;
  security: SecurityOverride;
};

export const holdingsOverrideSchema: Schema<HoldingsOverride> = s.object<HoldingsOverride>({
  institutionPrice: s.number(),
  institutionPriceAsOf: s.optional(s.dateOnly()),
  costBasis: s.optional(s.number()),
  quantity: s.number(),
  currency: s.string(),
  security: securityOverrideSchema,
  _keysMap: {
    institutionPrice: "institution_price",
    institutionPriceAsOf: "institution_price_as_of",
    costBasis: "cost_basis",
  },
});
