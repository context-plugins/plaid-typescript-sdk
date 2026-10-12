import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Defines the response schema for `/transfer/ledger/distribute` */
export type TransferLedgerDistributeResponse = {
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferLedgerDistributeResponseSchema: Schema<TransferLedgerDistributeResponse> =
  s.object<TransferLedgerDistributeResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
