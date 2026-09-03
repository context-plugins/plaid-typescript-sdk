import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferSweepSchema, type TransferSweep } from "./transfer-sweep.js";

export type TransferLedgerDepositResponse = {
  sweep: TransferSweep;
  requestId: string;
};

export const transferLedgerDepositResponseSchema: Schema<TransferLedgerDepositResponse> =
  s.object<TransferLedgerDepositResponse>({
    sweep: transferSweepSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
