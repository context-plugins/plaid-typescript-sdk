import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSweepSchema, type TransferSweep } from "./transfer-sweep.js";

export type TransferSweepGetResponse = {
  sweep: TransferSweep;
  requestId: string;
};

export const transferSweepGetResponseSchema: Schema<TransferSweepGetResponse> =
  s.object<TransferSweepGetResponse>({
    sweep: transferSweepSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
