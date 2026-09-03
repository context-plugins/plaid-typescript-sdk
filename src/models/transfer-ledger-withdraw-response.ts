import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSweepSchema, type TransferSweep } from "./transfer-sweep.js";

export type TransferLedgerWithdrawResponse = {
  sweep: TransferSweep;
  requestId: string;
};

export const transferLedgerWithdrawResponseSchema: Schema<TransferLedgerWithdrawResponse> =
  s.object<TransferLedgerWithdrawResponse>({
    sweep: transferSweepSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
