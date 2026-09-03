import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectBankAccountSchema, type ProtectBankAccount } from "./protect-bank-account.js";
import {
  protectIncidentEventResponseSchema,
  type ProtectIncidentEventResponse,
} from "./protect-incident-event-response.js";
import { protectReportConfidenceSchema, type ProtectReportConfidence } from "./protect-report-confidence.js";
import { protectReportSourceSchema, type ProtectReportSource } from "./protect-report-source.js";
import { protectReportTypeSchema, type ProtectReportType } from "./protect-report-type.js";

export type ProtectReport = {
  reportId: string;
  incidentEvent: ProtectIncidentEventResponse | null;
  reportConfidence: ProtectReportConfidence;
  reportType: ProtectReportType;
  reportSource: ProtectReportSource;
  bankAccount: ProtectBankAccount | null;
  achReturnCode: string | null;
  notes: string | null;
  createdAt: Date;
};

export const protectReportSchema: Schema<ProtectReport> = s.object<ProtectReport>({
  reportId: s.string(),
  incidentEvent: s.nullable(s.lazy(() => protectIncidentEventResponseSchema)),
  reportConfidence: protectReportConfidenceSchema,
  reportType: protectReportTypeSchema,
  reportSource: protectReportSourceSchema,
  bankAccount: s.nullable(s.lazy(() => protectBankAccountSchema)),
  achReturnCode: s.nullable(s.string()),
  notes: s.nullable(s.string()),
  createdAt: s.dateTime(),
  _keysMap: {
    reportId: "report_id",
    incidentEvent: "incident_event",
    reportConfidence: "report_confidence",
    reportType: "report_type",
    reportSource: "report_source",
    bankAccount: "bank_account",
    achReturnCode: "ach_return_code",
    createdAt: "created_at",
  },
});
