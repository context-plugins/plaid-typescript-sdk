import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * SandboxItemSetVerificationStatusResponse defines the response schema for
 * `/sandbox/item/set_verification_status`
 */
export type SandboxItemSetVerificationStatusResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxItemSetVerificationStatusResponseSchema: Schema<SandboxItemSetVerificationStatusResponse> =
  s.object<SandboxItemSetVerificationStatusResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
