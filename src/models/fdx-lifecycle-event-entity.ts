import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxEventStatusSchema, type FdxEventStatus } from "./fdx-event-status.js";
import { fdxUpdateReasonSchema, type FdxUpdateReason } from "./fdx-update-reason.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

export type FdxLifecycleEventEntity = {
  status?: FdxEventStatus;
  reason?: FdxUpdateReason;
  otherReason?: string;
  initiator?: PartyType;
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
