import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BeaconAuditTrailSource = {
  Dashboard: "dashboard",
  Api: "api",
  System: "system",
  BulkImport: "bulk_import",
} as const;
export type BeaconAuditTrailSource =
  | (typeof BeaconAuditTrailSource)[keyof typeof BeaconAuditTrailSource]
  | (string & {});

export const beaconAuditTrailSourceSchema: EnumSchema<BeaconAuditTrailSource> =
  s.enumOf<BeaconAuditTrailSource>(BeaconAuditTrailSource);
