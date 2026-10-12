import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryDeliveryMethodSchema,
  type LinkDeliveryDeliveryMethod,
} from "./link-delivery-delivery-method.js";

/** The communication method containing both the type and address to send the URL. */
export type LinkDeliveryCommunicationMethod = {
  /**
   * The delivery method to be used to deliver the Hosted Link session URL.
   *
   * `SMS`: The URL will be delivered through SMS
   *
   * `EMAIL`: The URL will be delivered through email
   */
  method?: LinkDeliveryDeliveryMethod;
  /**
   * The phone number / email address that Hosted Link sessions are delivered to. Phone numbers must
   * be in E.164 format.
   */
  address?: string;
};

export const linkDeliveryCommunicationMethodSchema: Schema<LinkDeliveryCommunicationMethod> =
  s.object<LinkDeliveryCommunicationMethod>({
    method: s.optional(s.lazy(() => linkDeliveryDeliveryMethodSchema)),
    address: s.optional(s.string()),
  });
