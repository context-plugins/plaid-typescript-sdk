import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

/** ItemWebhookUpdateResponse defines the response schema for `/item/webhook/update` */
export type ItemWebhookUpdateResponse = {
  /** Metadata about the Item. */
  item: Item;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const itemWebhookUpdateResponseSchema: Schema<ItemWebhookUpdateResponse> =
  s.object<ItemWebhookUpdateResponse>({
    item: itemSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
