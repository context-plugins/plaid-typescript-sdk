import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowAttributesVersionSchema,
  type CashflowAttributesVersion,
} from "./cashflow-attributes-version.js";

/** Defines configuration options to generate Cashflow Insights */
export type CraCheckReportCreateCashflowInsightsOptions = {
  /** The version of cashflow attributes. Required if using Cash Flow Insights. */
  attributesVersion?: CashflowAttributesVersion | null;
};

export const craCheckReportCreateCashflowInsightsOptionsSchema: Schema<CraCheckReportCreateCashflowInsightsOptions> =
  s.object<CraCheckReportCreateCashflowInsightsOptions>({
    attributesVersion: s.optionalNullable(s.lazy(() => cashflowAttributesVersionSchema)),
    _keysMap: {
      attributesVersion: "attributes_version",
    },
  });
