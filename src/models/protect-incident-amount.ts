import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ProtectIncidentAmount = {
  isoCurrencyCode?: string | null;
  value: number;
};

export const protectIncidentAmountSchema: Schema<ProtectIncidentAmount> = s.object<ProtectIncidentAmount>({
  isoCurrencyCode: s.optionalNullable(s.string()),
  value: s.number(),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
  },
});
