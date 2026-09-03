import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferIntentCreateSchema, type TransferIntentCreate } from "./transfer-intent-create.js";

export type TransferIntentCreateResponse = {
  transferIntent: TransferIntentCreate;
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
