import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ItemRemoveResponse = {
  requestId: string;
};

export const itemRemoveResponseSchema: Schema<ItemRemoveResponse> = s.object<ItemRemoveResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
