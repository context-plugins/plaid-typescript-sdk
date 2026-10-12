import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxEventStatusSchema, type FdxEventStatus } from "./fdx-event-status.js";
import { fdxUpdateReasonSchema, type FdxUpdateReason } from "./fdx-update-reason.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

/**
 * Details of consent or payment network identifier or other entity's revocation request or other
 * lifecycle status change event
 */
export type FdxLifecycleEventEntity = {
  /**
   * Current status of indicated entity after reported event change. Not all statuses will be
   * supported on all entity types by all data providers
   */
  status?: FdxEventStatus;
  /** Reason for lifecycle event status change */
  reason?: FdxUpdateReason;
  /** Additional information or description of an `OTHER` reason */
  otherReason?: string;
  /** Identifies the type of a party */
  initiator?: PartyType;
  /**
   * ISO 8601 date-time in format 'YYYY-MM-DDThh:mm:ss.nnn[Z|[+|-]hh:mm]' according to [IETF
   * RFC3339](https://datatracker.ietf.org/doc/html/rfc3339)
   */
  updatedTime?: Date;
};

export const fdxLifecycleEventEntitySchema: Schema<FdxLifecycleEventEntity> =
  s.object<FdxLifecycleEventEntity>({
    status: s.optional(s.lazy(() => fdxEventStatusSchema)),
    reason: s.optional(s.lazy(() => fdxUpdateReasonSchema)),
    otherReason: s.optional(s.string()),
    initiator: s.optional(s.lazy(() => partyTypeSchema)),
    updatedTime: s.optional(s.dateTime()),
  });
