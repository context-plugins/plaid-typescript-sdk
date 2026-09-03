import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseReportNumberFlowInsights = {
  startDate: string;
  endDate: string;
  count: number;
};

export const baseReportNumberFlowInsightsSchema: Schema<BaseReportNumberFlowInsights> =
  s.object<BaseReportNumberFlowInsights>({
    startDate: s.dateOnly(),
    endDate: s.dateOnly(),
    count: s.number(),
    _keysMap: {
      startDate: "start_date",
      endDate: "end_date",
    },
  });
