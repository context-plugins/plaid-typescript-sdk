import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferEventSchema, type TransferEvent } from "./transfer-event.js";

/** Defines the response schema for `/transfer/event/list` */
export type TransferEventListResponse = {
  transferEvents: TransferEvent[];
  /**
   * Whether there are more events to be pulled from the endpoint that have not already been
   * returned
   */
  hasMore: boolean;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
