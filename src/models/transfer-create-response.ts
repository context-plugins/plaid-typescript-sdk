import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSchema, type Transfer } from "./transfer.js";

export type TransferCreateResponse = {
  transfer: Transfer;
  requestId: string;
};

export const transferCreateResponseSchema: Schema<TransferCreateResponse> = s.object<TransferCreateResponse>({
  transfer: transferSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
