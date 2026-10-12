import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/sandbox/transfer/refund/simulate` */
export type SandboxTransferRefundSimulateResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const sandboxTransferRefundSimulateResponseSchema: Schema<SandboxTransferRefundSimulateResponse> =
  s.object<SandboxTransferRefundSimulateResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
