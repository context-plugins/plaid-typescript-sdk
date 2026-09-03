import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  fdxConsentRevocationRecordSchema,
  type FdxConsentRevocationRecord,
} from "./fdx-consent-revocation-record.js";

export type FdxConsentRevocations = {
  revocations: FdxConsentRevocationRecord[];
};

export const fdxConsentRevocationsSchema: Schema<FdxConsentRevocations> = s.object<FdxConsentRevocations>({
  revocations: s.array(s.lazy(() => fdxConsentRevocationRecordSchema)),
});
