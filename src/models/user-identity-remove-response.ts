import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserIdentityRemoveResponse = {
  requestId: string;
};

export const userIdentityRemoveResponseSchema: Schema<UserIdentityRemoveResponse> =
  s.object<UserIdentityRemoveResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
