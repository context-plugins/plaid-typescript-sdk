import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentGrantStatusSchema, type FdxConsentGrantStatus } from "./fdx-consent-grant-status.js";
import { fdxUpdateReasonSchema, type FdxUpdateReason } from "./fdx-update-reason.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

export type FdxConsentRevocationRecord = {
  status: FdxConsentGrantStatus;
  reason: FdxUpdateReason;
  initiator: PartyType;
  updatedTime: Date;
};

export const fdxConsentRevocationRecordSchema: Schema<FdxConsentRevocationRecord> =
  s.object<FdxConsentRevocationRecord>({
    status: fdxConsentGrantStatusSchema,
    reason: fdxUpdateReasonSchema,
    initiator: partyTypeSchema,
    updatedTime: s.dateTime(),
  });
