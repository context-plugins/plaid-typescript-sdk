import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The monetary amount associated with the incident. */
export type ProtectIncidentAmount = {
  /**
   * The ISO-4217 currency code of the incident amount. Defaults to `USD` if not specified.
   *
   * @default "USD"
   */
  isoCurrencyCode?: string | null;
  /** The monetary value of the incident amount. */
  value: number;
};

export const protectIncidentAmountSchema: Schema<ProtectIncidentAmount> = s.object<ProtectIncidentAmount>({
  isoCurrencyCode: s.defaulted(s.nullable(s.string()), "USD"),
  value: s.float64(),
  _keysMap: {
    isoCurrencyCode: "iso_currency_code",
  },
});
