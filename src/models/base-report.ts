import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { baseReportItemSchema, type BaseReportItem } from "./base-report-item.js";
import {
  baseReportUserAttributesSchema,
  type BaseReportUserAttributes,
} from "./base-report-user-attributes.js";

export type BaseReport = {
  reportId: string;
  dateGenerated: Date;
  daysRequested: number;
  clientReportId?: string | null;
  items: BaseReportItem[];
  attributes?: BaseReportUserAttributes;
};

export const baseReportSchema: Schema<BaseReport> = s.object<BaseReport>({
  reportId: s.string(),
  dateGenerated: s.dateTime(),
  daysRequested: s.number(),
  clientReportId: s.optionalNullable(s.string()),
  items: s.array(s.lazy(() => baseReportItemSchema)),
  attributes: s.optional(s.lazy(() => baseReportUserAttributesSchema)),
  _keysMap: {
    reportId: "report_id",
    dateGenerated: "date_generated",
    daysRequested: "days_requested",
    clientReportId: "client_report_id",
  },
});
