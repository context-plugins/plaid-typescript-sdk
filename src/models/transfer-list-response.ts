import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSchema, type Transfer } from "./transfer.js";

export type TransferListResponse = {
  transfers: Transfer[];
  requestId: string;
};

export const transferListResponseSchema: Schema<TransferListResponse> = s.object<TransferListResponse>({
  transfers: s.array(s.lazy(() => transferSchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
