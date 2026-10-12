import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferIntentCreateSchema, type TransferIntentCreate } from "./transfer-intent-create.js";

/** Defines the response schema for `/transfer/intent/create` */
export type TransferIntentCreateResponse = {
  /** Represents a transfer intent within Transfer UI. */
  transferIntent: TransferIntentCreate;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferIntentCreateResponseSchema: Schema<TransferIntentCreateResponse> =
  s.object<TransferIntentCreateResponse>({
    transferIntent: transferIntentCreateSchema,
    requestId: s.string(),
    _keysMap: {
      transferIntent: "transfer_intent",
      requestId: "request_id",
    },
  });
