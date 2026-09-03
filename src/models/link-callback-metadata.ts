import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryAccountSchema, type LinkDeliveryAccount } from "./link-delivery-account.js";
import { linkDeliveryInstitutionSchema, type LinkDeliveryInstitution } from "./link-delivery-institution.js";
import {
  linkDeliveryWebhookCallbackTypeSchema,
  type LinkDeliveryWebhookCallbackType,
} from "./link-delivery-webhook-callback-type.js";
import { linkEventNameSchema, type LinkEventName } from "./link-event-name.js";

export type LinkCallbackMetadata = {
  callbackType?: LinkDeliveryWebhookCallbackType;
  eventName?: LinkEventName;
  status?: string;
  linkSessionId?: string;
  requestId?: string;
  institution?: LinkDeliveryInstitution;
  accounts?: LinkDeliveryAccount[];
};

export const linkCallbackMetadataSchema: Schema<LinkCallbackMetadata> = s.object<LinkCallbackMetadata>({
  callbackType: s.optional(s.lazy(() => linkDeliveryWebhookCallbackTypeSchema)),
  eventName: s.optional(s.lazy(() => linkEventNameSchema)),
  status: s.optional(s.string()),
  linkSessionId: s.optional(s.string()),
  requestId: s.optional(s.string()),
  institution: s.optional(s.lazy(() => linkDeliveryInstitutionSchema)),
  accounts: s.optional(s.array(s.lazy(() => linkDeliveryAccountSchema))),
  _keysMap: {
    callbackType: "callback_type",
    eventName: "event_name",
    linkSessionId: "link_session_id",
    requestId: "request_id",
  },
});
