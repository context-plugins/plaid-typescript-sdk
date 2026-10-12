import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryAccountSchema, type LinkDeliveryAccount } from "./link-delivery-account.js";
import { linkDeliveryInstitutionSchema, type LinkDeliveryInstitution } from "./link-delivery-institution.js";
import {
  linkDeliveryWebhookCallbackTypeSchema,
  type LinkDeliveryWebhookCallbackType,
} from "./link-delivery-webhook-callback-type.js";
import { linkEventNameSchema, type LinkEventName } from "./link-event-name.js";

/** Information related to the callback from the Hosted Link session. */
export type LinkCallbackMetadata = {
  /** The type of Link callback event */
  callbackType?: LinkDeliveryWebhookCallbackType;
  /** A string representing the event that has just occurred in the Link flow. */
  eventName?: LinkEventName;
  /** Indicates where in the flow the Link user exited */
  status?: string;
  /**
   * A unique identifier associated with a user's actions and events through the Link flow. Include
   * this identifier when opening a support ticket for faster turnaround.
   */
  linkSessionId?: string;
  /**
   * The request ID for the last request made by Link. This can be shared with Plaid support to
   * expedite investigation.
   */
  requestId?: string;
  /** Information related to the financial institution. */
  institution?: LinkDeliveryInstitution;
  /**
   * A list of accounts attached to the connected Item. If Account Select is enabled via the
   * developer dashboard, accounts will only include selected accounts.
   */
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
