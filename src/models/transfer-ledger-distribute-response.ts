import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferLedgerDistributeResponse = {
  requestId: string;
};

export const transferLedgerDistributeResponseSchema: Schema<TransferLedgerDistributeResponse> =
  s.object<TransferLedgerDistributeResponse>({
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
