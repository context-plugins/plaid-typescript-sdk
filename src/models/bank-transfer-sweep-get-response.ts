import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSweepSchema, type BankTransferSweep } from "./bank-transfer-sweep.js";

export type BankTransferSweepGetResponse = {
  sweep: BankTransferSweep;
  requestId: string;
};

export const bankTransferSweepGetResponseSchema: Schema<BankTransferSweepGetResponse> =
  s.object<BankTransferSweepGetResponse>({
    sweep: bankTransferSweepSchema,
    requestId: s.string(),
    _keysMap: {
      requestId: "request_id",
    },
  });
