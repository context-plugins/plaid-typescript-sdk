import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowAttributesVersionSchema,
  type CashflowAttributesVersion,
} from "./cashflow-attributes-version.js";

/**
 * Deprecated. This field is no longer accepted for new clients (created on or after 2026-07-01).
 * New clients should specify required products when creating the Consumer Report. Existing
 * integrations may continue to pass `options`.
 */
export type CraCheckReportCashflowInsightsGetOptions = {
  /** The version of cashflow attributes. Required if using Cash Flow Insights. */
  attributesVersion?: CashflowAttributesVersion | null;
};

export const craCheckReportCashflowInsightsGetOptionsSchema: Schema<CraCheckReportCashflowInsightsGetOptions> =
  s.object<CraCheckReportCashflowInsightsGetOptions>({
    attributesVersion: s.optionalNullable(s.lazy(() => cashflowAttributesVersionSchema)),
    _keysMap: {
      attributesVersion: "attributes_version",
    },
  });
