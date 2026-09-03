import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserItemsRemoveResponse = {
  requestId: string;
};

export const userItemsRemoveResponseSchema: Schema<UserItemsRemoveResponse> =
  s.object<UserItemsRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
