import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferCancelResponse = {
  requestId: string;
};

export const transferCancelResponseSchema: Schema<TransferCancelResponse> = s.object<TransferCancelResponse>({
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
