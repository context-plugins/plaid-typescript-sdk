import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSchema, type BankTransfer } from "./bank-transfer.js";

export type BankTransferListResponse = {
  bankTransfers: BankTransfer[];
  requestId: string;
};

export const bankTransferListResponseSchema: Schema<BankTransferListResponse> =
  s.object<BankTransferListResponse>({
    bankTransfers: s.array(s.lazy(() => bankTransferSchema)),
    requestId: s.string(),
    _keysMap: {
      bankTransfers: "bank_transfers",
      requestId: "request_id",
    },
  });
