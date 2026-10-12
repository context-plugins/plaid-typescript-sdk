import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * UserAccountSessionEventSendResponse defines the response schema for
 * `/user_account/session/event/send`
 */
export type UserAccountSessionEventSendResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const userAccountSessionEventSendResponseSchema: Schema<UserAccountSessionEventSendResponse> =
  s.object<UserAccountSessionEventSendResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
