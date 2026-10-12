import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowAttributesVersionSchema,
  type CashflowAttributesVersion,
} from "./cashflow-attributes-version.js";

/** Specifies options for initializing Link for use with the Cashflow Insights product. */
export type LinkTokenCreateRequestCraOptionsCashflowInsights = {
  /** The version of cashflow attributes. Required if using Cash Flow Insights. */
  attributesVersion?: CashflowAttributesVersion | null;
};

export const linkTokenCreateRequestCraOptionsCashflowInsightsSchema: Schema<LinkTokenCreateRequestCraOptionsCashflowInsights> =
  s.object<LinkTokenCreateRequestCraOptionsCashflowInsights>({
    attributesVersion: s.optionalNullable(s.lazy(() => cashflowAttributesVersionSchema)),
    _keysMap: {
      attributesVersion: "attributes_version",
    },
  });
