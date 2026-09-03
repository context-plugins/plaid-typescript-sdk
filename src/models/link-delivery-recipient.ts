import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryCommunicationMethodSchema,
  type LinkDeliveryCommunicationMethod,
} from "./link-delivery-communication-method.js";

export type LinkDeliveryRecipient = {
  communicationMethods?: LinkDeliveryCommunicationMethod[];
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
