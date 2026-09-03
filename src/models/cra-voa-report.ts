import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { craVoaReportAttributesSchema, type CraVoaReportAttributes } from "./cra-voa-report-attributes.js";
import { craVoaReportItemSchema, type CraVoaReportItem } from "./cra-voa-report-item.js";

export type CraVoaReport = {
  generatedTime: Date;
  daysRequested: number;
  items: CraVoaReportItem[];
  attributes: CraVoaReportAttributes;
};

export const craVoaReportSchema: Schema<CraVoaReport> = s.object<CraVoaReport>({
  generatedTime: s.dateTime(),
  daysRequested: s.number(),
  items: s.array(s.lazy(() => craVoaReportItemSchema)),
  attributes: craVoaReportAttributesSchema,
  _keysMap: {
    generatedTime: "generated_time",
    daysRequested: "days_requested",
  },
});
