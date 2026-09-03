import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { consentEventSchema, type ConsentEvent } from "./consent-event.js";

export type ConsentEventsGetResponse = {
  requestId: string;
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
