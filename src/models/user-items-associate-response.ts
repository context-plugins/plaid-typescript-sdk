import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserItemsAssociateResponse = {
  requestId: string;
};

export const userItemsAssociateResponseSchema: Schema<UserItemsAssociateResponse> =
  s.object<UserItemsAssociateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
