import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type ItemWebhookUpdateResponse = {
  item: Item;
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
