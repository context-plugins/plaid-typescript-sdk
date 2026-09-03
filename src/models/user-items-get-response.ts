import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { itemSchema, type Item } from "./item.js";

export type UserItemsGetResponse = {
  items: Item[];
  requestId: string;
};

export const userItemsGetResponseSchema: Schema<UserItemsGetResponse> = s.object<UserItemsGetResponse>({
  items: s.array(s.lazy(() => itemSchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
