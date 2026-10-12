import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconAuditTrailSourceSchema, type BeaconAuditTrailSource } from "./beacon-audit-trail-source.js";

/**
 * Information about the last change made to the parent object specifying what caused the change as
 * well as when it occurred.
 */
export type BeaconAuditTrail = {
  /**
   * A type indicating what caused a resource to be changed or updated.
   *
   *
   * `dashboard` - The resource was created or updated by a member of your team via the Plaid
   * dashboard.
   *
   * `api` - The resource was created or updated via the Plaid API.
   *
   * `system` - The resource was created or updated automatically by a part of the Plaid Beacon
   * system. For example, if another business using Plaid Beacon created a fraud report that matched
   * one of your users, your matching user's status would automatically be updated and the audit
   * trail source would be `system`.
   *
   * `bulk_import` - The resource was created or updated as part of a bulk import process. For
   * example, if your company provided a CSV of user data as part of your initial onboarding, the
   * audit trail source would be `bulk_import`.
   */
  source: BeaconAuditTrailSource;
  /**
   * ID of the associated user. To retrieve the email address or other details of the person
   * corresponding to this ID, use `/dashboard_user/get`.
   */
  dashboardUserId: string | null;
  /** An ISO8601 formatted timestamp. */
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
