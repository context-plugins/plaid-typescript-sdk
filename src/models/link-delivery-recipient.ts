import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryCommunicationMethodSchema,
  type LinkDeliveryCommunicationMethod,
} from "./link-delivery-communication-method.js";

/**
 * Metadata related to the recipient. If the information required to populate this field is not
 * available, leave it blank.
 */
export type LinkDeliveryRecipient = {
  /**
   * The list of communication methods to send the Hosted Link session URL to. If delivery is not
   * required, leave this field blank.
   */
  communicationMethods?: LinkDeliveryCommunicationMethod[];
  /**
   * First name of the recipient. Will be used in the body of the email / text (if configured). If
   * this information is not available, leave this field blank.
   */
  firstName?: string;
};

export const linkDeliveryRecipientSchema: Schema<LinkDeliveryRecipient> = s.object<LinkDeliveryRecipient>({
  communicationMethods: s.optional(s.array(s.lazy(() => linkDeliveryCommunicationMethodSchema))),
  firstName: s.optional(s.string()),
  _keysMap: {
    communicationMethods: "communication_methods",
    firstName: "first_name",
  },
});
