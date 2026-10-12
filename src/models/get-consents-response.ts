import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fdxConsentGrantSchema, type FdxConsentGrant } from "./fdx-consent-grant.js";

/** GetConsentsResponse defines the response schema for `/fdx/consents` */
export type GetConsentsResponse = {
  /** Consent grants matching the customerId (and optional status) filter. */
  consentGrants: FdxConsentGrant[];
};

export const getConsentsResponseSchema: Schema<GetConsentsResponse> = s.object<GetConsentsResponse>({
  consentGrants: s.array(s.lazy(() => fdxConsentGrantSchema)),
  _keysMap: {
    consentGrants: "consent_grants",
  },
});
