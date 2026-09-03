import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferIntentGetSchema, type TransferIntentGet } from "./transfer-intent-get.js";

export type TransferIntentGetResponse = {
  transferIntent: TransferIntentGet;
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
