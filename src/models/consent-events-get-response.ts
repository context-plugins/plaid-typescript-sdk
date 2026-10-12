import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consentEventSchema, type ConsentEvent } from "./consent-event.js";

/** Describes a historical log of item consent events. */
export type ConsentEventsGetResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
  /** A list of consent events. */
  consentEvents: ConsentEvent[];
};

export const consentEventsGetResponseSchema: Schema<ConsentEventsGetResponse> =
  s.object<ConsentEventsGetResponse>({
    requestId: s.string(),
    consentEvents: s.array(s.lazy(() => consentEventSchema)),
    _keysMap: {
      requestId: "request_id",
      consentEvents: "consent_events",
    },
  });
