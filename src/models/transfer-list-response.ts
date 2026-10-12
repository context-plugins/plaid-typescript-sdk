import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSchema, type Transfer } from "./transfer.js";

/** Defines the response schema for `/transfer/list` */
export type TransferListResponse = {
  transfers: Transfer[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferListResponseSchema: Schema<TransferListResponse> = s.object<TransferListResponse>({
  transfers: s.array(s.lazy(() => transferSchema)),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
