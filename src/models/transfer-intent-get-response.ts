import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferIntentGetSchema, type TransferIntentGet } from "./transfer-intent-get.js";

/** Defines the response schema for `/transfer/intent/get` */
export type TransferIntentGetResponse = {
  /** Represents a transfer intent within Transfer UI. */
  transferIntent: TransferIntentGet;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferIntentGetResponseSchema: Schema<TransferIntentGetResponse> =
  s.object<TransferIntentGetResponse>({
    transferIntent: transferIntentGetSchema,
    requestId: s.string(),
    _keysMap: {
      transferIntent: "transfer_intent",
      requestId: "request_id",
    },
  });
