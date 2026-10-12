import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/return/recover` */
export type TransferReturnRecoverResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferReturnRecoverResponseSchema: Schema<TransferReturnRecoverResponse> =
  s.object<TransferReturnRecoverResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
