import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSchema, type BankTransfer } from "./bank-transfer.js";

/** Defines the response schema for `/bank_transfer/create` */
export type BankTransferCreateResponse = {
  /** Represents a bank transfer within the Bank Transfers API. */
  bankTransfer: BankTransfer;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const bankTransferCreateResponseSchema: Schema<BankTransferCreateResponse> =
  s.object<BankTransferCreateResponse>({
    bankTransfer: bankTransferSchema,
    requestId: s.string(),
    _keysMap: {
      bankTransfer: "bank_transfer",
      requestId: "request_id",
    },
  });
