import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSchema, type BankTransfer } from "./bank-transfer.js";

export type BankTransferGetResponse = {
  bankTransfer: BankTransfer;
  requestId: string;
};

export const bankTransferGetResponseSchema: Schema<BankTransferGetResponse> =
  s.object<BankTransferGetResponse>({
    bankTransfer: bankTransferSchema,
    requestId: s.string(),
    _keysMap: {
      bankTransfer: "bank_transfer",
      requestId: "request_id",
    },
  });
