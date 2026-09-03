import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cashflowAttributesVersionSchema,
  type CashflowAttributesVersion,
} from "./cashflow-attributes-version.js";

export type CraCheckReportCashflowInsightsGetOptions = {
  attributesVersion?: CashflowAttributesVersion | null;
};

export const craCheckReportCashflowInsightsGetOptionsSchema: Schema<CraCheckReportCashflowInsightsGetOptions> =
  s.object<CraCheckReportCashflowInsightsGetOptions>({
    attributesVersion: s.optionalNullable(s.lazy(() => cashflowAttributesVersionSchema)),
    _keysMap: {
      attributesVersion: "attributes_version",
    },
  });
