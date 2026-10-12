import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { totalReportInflowAmountSchema, type TotalReportInflowAmount } from "./total-report-inflow-amount.js";
import {
  totalReportOutflowAmountSchema,
  type TotalReportOutflowAmount,
} from "./total-report-outflow-amount.js";

/** Attributes for the VOA report. */
export type CraVoaReportAttributes = {
  /**
   * Total amount of debit transactions into the report's accounts in the time period of the report.
   * This field only takes into account USD transactions from the accounts.
   */
  totalInflowAmount: TotalReportInflowAmount | null;
  /**
   * Total amount of credit transactions out of the report's accounts in the time period of the
   * report. This field only takes into account USD transactions from the accounts.
   */
  totalOutflowAmount: TotalReportOutflowAmount | null;
};

export const craVoaReportAttributesSchema: Schema<CraVoaReportAttributes> = s.object<CraVoaReportAttributes>({
  totalInflowAmount: s.nullable(s.lazy(() => totalReportInflowAmountSchema)),
  totalOutflowAmount: s.nullable(s.lazy(() => totalReportOutflowAmountSchema)),
  _keysMap: {
    totalInflowAmount: "total_inflow_amount",
    totalOutflowAmount: "total_outflow_amount",
  },
});
