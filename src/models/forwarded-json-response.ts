import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An arbitrary JSON payload sent to or received from the Plaid server. Internal use only. */
export type ForwardedJsonResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const forwardedJsonResponseSchema: Schema<ForwardedJsonResponse> = s.object<ForwardedJsonResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
