import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  linkDeliveryDeliveryMethodSchema,
  type LinkDeliveryDeliveryMethod,
} from "./link-delivery-delivery-method.js";

export type LinkDeliveryCommunicationMethod = {
  method?: LinkDeliveryDeliveryMethod;
  address?: string;
};

export const linkDeliveryCommunicationMethodSchema: Schema<LinkDeliveryCommunicationMethod> =
  s.object<LinkDeliveryCommunicationMethod>({
    method: s.optional(s.lazy(() => linkDeliveryDeliveryMethodSchema)),
    address: s.optional(s.string()),
  });
