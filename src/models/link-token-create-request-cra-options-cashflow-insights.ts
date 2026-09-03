import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowAttributesVersionSchema,
  type CashflowAttributesVersion,
} from "./cashflow-attributes-version.js";

export type LinkTokenCreateRequestCraOptionsCashflowInsights = {
  attributesVersion?: CashflowAttributesVersion | null;
};

export const linkTokenCreateRequestCraOptionsCashflowInsightsSchema: Schema<LinkTokenCreateRequestCraOptionsCashflowInsights> =
  s.object<LinkTokenCreateRequestCraOptionsCashflowInsights>({
    attributesVersion: s.optionalNullable(s.lazy(() => cashflowAttributesVersionSchema)),
    _keysMap: {
      attributesVersion: "attributes_version",
    },
  });
