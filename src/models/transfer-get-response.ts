import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSchema, type Transfer } from "./transfer.js";

export type TransferGetResponse = {
  transfer: Transfer;
  requestId: string;
};

export const transferGetResponseSchema: Schema<TransferGetResponse> = s.object<TransferGetResponse>({
  transfer: transferSchema,
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
