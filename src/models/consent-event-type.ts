import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ConsentEventType = {
  ConsentGranted: "CONSENT_GRANTED",
  ConsentRevoked: "CONSENT_REVOKED",
  ConsentUpdated: "CONSENT_UPDATED",
} as const;
export type ConsentEventType = (typeof ConsentEventType)[keyof typeof ConsentEventType] | (string & {});

export const consentEventTypeSchema: EnumSchema<ConsentEventType> =
  s.enumOf<ConsentEventType>(ConsentEventType);
