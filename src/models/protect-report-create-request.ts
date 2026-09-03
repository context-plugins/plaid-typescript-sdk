import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { protectBankAccountSchema, type ProtectBankAccount } from "./protect-bank-account.js";
import { protectIncidentEventSchema, type ProtectIncidentEvent } from "./protect-incident-event.js";
import { protectReportConfidenceSchema, type ProtectReportConfidence } from "./protect-report-confidence.js";
import { protectReportSourceSchema, type ProtectReportSource } from "./protect-report-source.js";
import { protectReportTypeSchema, type ProtectReportType } from "./protect-report-type.js";

export type ProtectReportCreateRequest = {
  clientId?: string;
  secret?: string;
  userId?: string;
  incidentEvent?: ProtectIncidentEvent | null;
  reportConfidence: ProtectReportConfidence;
  reportType: ProtectReportType;
  reportSource: ProtectReportSource;
  bankAccount?: ProtectBankAccount | null;
  achReturnCode?: string | null;
  notes?: string | null;
};

export const protectReportCreateRequestSchema: Schema<ProtectReportCreateRequest> =
  s.object<ProtectReportCreateRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    userId: s.optional(s.string()),
    incidentEvent: s.optionalNullable(s.lazy(() => protectIncidentEventSchema)),
    reportConfidence: protectReportConfidenceSchema,
    reportType: protectReportTypeSchema,
    reportSource: protectReportSourceSchema,
    bankAccount: s.optionalNullable(s.lazy(() => protectBankAccountSchema)),
    achReturnCode: s.optionalNullable(s.string()),
    notes: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      userId: "user_id",
      incidentEvent: "incident_event",
      reportConfidence: "report_confidence",
      reportType: "report_type",
      reportSource: "report_source",
      bankAccount: "bank_account",
      achReturnCode: "ach_return_code",
    },
  });
