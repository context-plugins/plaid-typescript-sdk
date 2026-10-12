import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconAuditTrailSchema, type BeaconAuditTrail } from "./beacon-audit-trail.js";
import { beaconUserDataSchema, type BeaconUserData } from "./beacon-user-data.js";
import { beaconUserStatusSchema, type BeaconUserStatus } from "./beacon-user-status.js";

/** A Beacon User represents an end user that has been scanned against the Beacon Network. */
export type BeaconUserGetResponse = {
  /** An array of Plaid Item IDs corresponding to the Accounts associated with this Beacon User. */
  itemIds: string[];
  /** ID of the associated Beacon User. */
  id: string;
  /** The `version` field begins with 1 and increments each time the user is updated. */
  version: number;
  /** An ISO8601 formatted timestamp. */
  createdAt: Date;
  /**
   * An ISO8601 formatted timestamp. This field indicates the last time the resource was modified.
   */
  updatedAt: Date;
  /**
   * A status of a Beacon User.
   *
   * `rejected`: The Beacon User has been rejected for fraud. Users can be automatically or manually
   * rejected.
   *
   * `pending_review`: The Beacon User has been marked for review.
   *
   * `cleared`: The Beacon User has been cleared of fraud.
   */
  status: BeaconUserStatus;
  /** ID of the associated Beacon Program. */
  programId: string;
  /**
   * A unique ID that identifies the end user in your system. Either a `user_id` or the
   * `client_user_id` must be provided. This ID can also be used to associate user-specific data
   * from other Plaid products. Financial Account Matching requires this field and the
   * `/link/token/create` `client_user_id` to be consistent. Personally identifiable information,
   * such as an email address or phone number, should not be used in the `client_user_id`.
   */
  clientUserId: string;
  /**
   * A Beacon User's data and resulting analysis when checked against duplicate records and the
   * Beacon Fraud Network.
   */
  user: BeaconUserData;
  /**
   * Information about the last change made to the parent object specifying what caused the change
   * as well as when it occurred.
   */
  auditTrail: BeaconAuditTrail;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const beaconUserGetResponseSchema: Schema<BeaconUserGetResponse> = s.object<BeaconUserGetResponse>({
  itemIds: s.array(s.string()),
  id: s.string(),
  version: s.int(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  status: beaconUserStatusSchema,
  programId: s.string(),
  clientUserId: s.string(),
  user: beaconUserDataSchema,
  auditTrail: beaconAuditTrailSchema,
  requestId: s.string(),
  _keysMap: {
    itemIds: "item_ids",
    createdAt: "created_at",
    updatedAt: "updated_at",
    programId: "program_id",
    clientUserId: "client_user_id",
    auditTrail: "audit_trail",
    requestId: "request_id",
  },
});
