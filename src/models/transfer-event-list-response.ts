import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferEventSchema, type TransferEvent } from "./transfer-event.js";

export type TransferEventListResponse = {
  transferEvents: TransferEvent[];
  hasMore: boolean;
  requestId: string;
};

export const transferEventListResponseSchema: Schema<TransferEventListResponse> =
  s.object<TransferEventListResponse>({
    transferEvents: s.array(s.lazy(() => transferEventSchema)),
    hasMore: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      transferEvents: "transfer_events",
      hasMore: "has_more",
      requestId: "request_id",
    },
  });
