import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/bank_transfer/cancel` */
export type BankTransferCancelResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const bankTransferCancelResponseSchema: Schema<BankTransferCancelResponse> =
  s.object<BankTransferCancelResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
