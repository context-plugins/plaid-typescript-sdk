import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { linkDeliveryRecipientSchema, type LinkDeliveryRecipient } from "./link-delivery-recipient.js";

/** Optional metadata related to the Hosted Link session */
export type LinkDeliveryOptions = {
  /**
   * Metadata related to the recipient. If the information required to populate this field is not
   * available, leave it blank.
   */
  recipient?: LinkDeliveryRecipient;
};

export const linkDeliveryOptionsSchema: Schema<LinkDeliveryOptions> = s.object<LinkDeliveryOptions>({
  recipient: s.optional(s.lazy(() => linkDeliveryRecipientSchema)),
});
