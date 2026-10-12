import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentGrantStatusSchema, type FdxConsentGrantStatus } from "./fdx-consent-grant-status.js";
import { fdxUpdateReasonSchema, type FdxUpdateReason } from "./fdx-update-reason.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

/** One revocation record on a consent grant, mirroring the FDX ConsentRevocation entity. */
export type FdxConsentRevocationRecord = {
  /** Current status of a consent grant. One of `ACTIVE`, `REVOKED`, `EXPIRED`. */
  status: FdxConsentGrantStatus;
  /** Reason for lifecycle event status change */
  reason: FdxUpdateReason;
  /** Identifies the type of a party */
  initiator: PartyType;
  /** When the consent grant was revoked */
  updatedTime: Date;
};

export const fdxConsentRevocationRecordSchema: Schema<FdxConsentRevocationRecord> =
  s.object<FdxConsentRevocationRecord>({
    status: fdxConsentGrantStatusSchema,
    reason: fdxUpdateReasonSchema,
    initiator: partyTypeSchema,
    updatedTime: s.dateTime(),
  });
