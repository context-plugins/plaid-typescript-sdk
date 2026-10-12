import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferSchema, type BankTransfer } from "./bank-transfer.js";

/** Defines the response schema for `/bank_transfer/list` */
export type BankTransferListResponse = {
  bankTransfers: BankTransfer[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
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
