import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserAccountSessionEventSendResponse = {
  requestId: string;
};

export const userAccountSessionEventSendResponseSchema: Schema<UserAccountSessionEventSendResponse> =
  s.object<UserAccountSessionEventSendResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
