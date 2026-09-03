import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSchema, type BankTransfer } from "./bank-transfer.js";

export type ProcessorBankTransferCreateResponse = {
  bankTransfer: BankTransfer;
  requestId: string;
};

export const processorBankTransferCreateResponseSchema: Schema<ProcessorBankTransferCreateResponse> =
  s.object<ProcessorBankTransferCreateResponse>({
    bankTransfer: bankTransferSchema,
    requestId: s.string(),
    _keysMap: {
      bankTransfer: "bank_transfer",
      requestId: "request_id",
    },
  });
