import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxUpdateReasonSchema, type FdxUpdateReason } from "./fdx-update-reason.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

export type FdxConsentRevocation = {
  initiator: PartyType;
  reason: FdxUpdateReason;
  otherReason?: string;
  updatedTime?: Date;
};

export const fdxConsentRevocationSchema: Schema<FdxConsentRevocation> = s.object<FdxConsentRevocation>({
  initiator: partyTypeSchema,
  reason: fdxUpdateReasonSchema,
  otherReason: s.optional(s.string()),
  updatedTime: s.optional(s.dateTime()),
});
