import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSweepSchema, type TransferSweep } from "./transfer-sweep.js";

export type TransferSweepListResponse = {
  sweeps: TransferSweep[];
  requestId: string;
};

export const transferSweepListResponseSchema: Schema<TransferSweepListResponse> =
  s.object<TransferSweepListResponse>({
    sweeps: s.array(s.lazy(() => transferSweepSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
