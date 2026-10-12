import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fdxConsentRevocationRecordSchema,
  type FdxConsentRevocationRecord,
} from "./fdx-consent-revocation-record.js";

/**
 * The revocation history of a consent grant. Response body for GET
 * /fdx/consents/{consentId}/revocation.
 */
export type FdxConsentRevocations = {
  /**
   * Revocation records for the consent grant, most recent first. Empty when the grant has never
   * been revoked.
   */
  revocations: FdxConsentRevocationRecord[];
};

export const fdxConsentRevocationsSchema: Schema<FdxConsentRevocations> = s.object<FdxConsentRevocations>({
  revocations: s.array(s.lazy(() => fdxConsentRevocationRecordSchema)),
});
