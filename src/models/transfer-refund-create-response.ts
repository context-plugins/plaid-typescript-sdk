import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferRefundSchema, type TransferRefund } from "./transfer-refund.js";

/** Defines the response schema for `/transfer/refund/create` */
export type TransferRefundCreateResponse = {
  /** Represents a refund within the Transfers API. */
  refund: TransferRefund;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferRefundCreateResponseSchema: Schema<TransferRefundCreateResponse> =
  s.object<TransferRefundCreateResponse>({
    refund: transferRefundSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
