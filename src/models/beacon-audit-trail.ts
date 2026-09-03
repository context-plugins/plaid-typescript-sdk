import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconAuditTrailSourceSchema, type BeaconAuditTrailSource } from "./beacon-audit-trail-source.js";

export type BeaconAuditTrail = {
  source: BeaconAuditTrailSource;
  dashboardUserId: string | null;
  timestamp: Date;
};

export const beaconAuditTrailSchema: Schema<BeaconAuditTrail> = s.object<BeaconAuditTrail>({
  source: beaconAuditTrailSourceSchema,
  dashboardUserId: s.nullable(s.string()),
  timestamp: s.dateTime(),
  _keysMap: {
    dashboardUserId: "dashboard_user_id",
  },
});
