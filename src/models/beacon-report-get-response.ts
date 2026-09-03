import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconAuditTrailSchema, type BeaconAuditTrail } from "./beacon-audit-trail.js";
import { beaconReportTypeSchema, type BeaconReportType } from "./beacon-report-type.js";
import { fraudAmountSchema, type FraudAmount } from "./fraud-amount.js";

export type BeaconReportGetResponse = {
  id: string;
  beaconUserId: string;
  createdAt: Date;
  type: BeaconReportType;
  fraudDate: string | null;
  eventDate: string;
  fraudAmount: FraudAmount | null;
  auditTrail: BeaconAuditTrail;
  requestId: string;
};

export const beaconReportGetResponseSchema: Schema<BeaconReportGetResponse> =
  s.object<BeaconReportGetResponse>({
    id: s.string(),
    beaconUserId: s.string(),
    createdAt: s.dateTime(),
    type: beaconReportTypeSchema,
    fraudDate: s.nullable(s.dateOnly()),
    eventDate: s.dateOnly(),
    fraudAmount: s.nullable(s.lazy(() => fraudAmountSchema)),
    auditTrail: beaconAuditTrailSchema,
    requestId: s.string(),
    _keysMap: {
      beaconUserId: "beacon_user_id",
      createdAt: "created_at",
      fraudDate: "fraud_date",
      eventDate: "event_date",
      fraudAmount: "fraud_amount",
      auditTrail: "audit_trail",
      requestId: "request_id",
    },
  });
