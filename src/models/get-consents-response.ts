import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentGrantSchema, type FdxConsentGrant } from "./fdx-consent-grant.js";

export type GetConsentsResponse = {
  consentGrants: FdxConsentGrant[];
};

export const getConsentsResponseSchema: Schema<GetConsentsResponse> = s.object<GetConsentsResponse>({
  consentGrants: s.array(s.lazy(() => fdxConsentGrantSchema)),
  _keysMap: {
    consentGrants: "consent_grants",
  },
});
