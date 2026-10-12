import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxUpdateReasonSchema, type FdxUpdateReason } from "./fdx-update-reason.js";
import { partyTypeSchema, type PartyType } from "./party-type.js";

/** Request body for PUT /fdx/consents/{consentId}/revocation. */
export type FdxConsentRevocation = {
  /** Identifies the type of a party */
  initiator: PartyType;
  /** Reason for lifecycle event status change */
  reason: FdxUpdateReason;
  /** Additional information or description of an `OTHER` reason */
  otherReason?: string;
  /** When the revocation was effected on the initiator's side */
  updatedTime?: Date;
};

export const fdxConsentRevocationSchema: Schema<FdxConsentRevocation> = s.object<FdxConsentRevocation>({
  initiator: partyTypeSchema,
  reason: fdxUpdateReasonSchema,
  otherReason: s.optional(s.string()),
  updatedTime: s.optional(s.dateTime()),
});
