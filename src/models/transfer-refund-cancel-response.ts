import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/refund/cancel` */
export type TransferRefundCancelResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferRefundCancelResponseSchema: Schema<TransferRefundCancelResponse> =
  s.object<TransferRefundCancelResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
