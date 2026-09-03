import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { beaconAuditTrailSchema, type BeaconAuditTrail } from "./beacon-audit-trail.js";
import { beaconUserDataSchema, type BeaconUserData } from "./beacon-user-data.js";
import { beaconUserStatusSchema, type BeaconUserStatus } from "./beacon-user-status.js";

export type BeaconUser = {
  itemIds: string[];
  id: string;
  version: number;
  createdAt: Date;
  updatedAt: Date;
  status: BeaconUserStatus;
  programId: string;
  clientUserId: string;
  user: BeaconUserData;
  auditTrail: BeaconAuditTrail;
};

export const beaconUserSchema: Schema<BeaconUser> = s.object<BeaconUser>({
  itemIds: s.array(s.string()),
  id: s.string(),
  version: s.number(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  status: beaconUserStatusSchema,
  programId: s.string(),
  clientUserId: s.string(),
  user: beaconUserDataSchema,
  auditTrail: beaconAuditTrailSchema,
  _keysMap: {
    itemIds: "item_ids",
    createdAt: "created_at",
    updatedAt: "updated_at",
    programId: "program_id",
    clientUserId: "client_user_id",
    auditTrail: "audit_trail",
  },
});
