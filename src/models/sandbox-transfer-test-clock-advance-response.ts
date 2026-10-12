import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/sandbox/transfer/test_clock/advance` */
export type SandboxTransferTestClockAdvanceResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxTransferTestClockAdvanceResponseSchema: Schema<SandboxTransferTestClockAdvanceResponse> =
  s.object<SandboxTransferTestClockAdvanceResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
