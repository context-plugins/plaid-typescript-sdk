import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSweepSchema, type BankTransferSweep } from "./bank-transfer-sweep.js";

export type BankTransferSweepListResponse = {
  sweeps: BankTransferSweep[];
  requestId: string;
};

export const bankTransferSweepListResponseSchema: Schema<BankTransferSweepListResponse> =
  s.object<BankTransferSweepListResponse>({
    sweeps: s.array(s.lazy(() => bankTransferSweepSchema)),
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
