import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryRecipientSchema, type LinkDeliveryRecipient } from "./link-delivery-recipient.js";

export type LinkDeliveryOptions = {
  recipient?: LinkDeliveryRecipient;
};

export const linkDeliveryOptionsSchema: Schema<LinkDeliveryOptions> = s.object<LinkDeliveryOptions>({
  recipient: s.optional(s.lazy(() => linkDeliveryRecipientSchema)),
});
