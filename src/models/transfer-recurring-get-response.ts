import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringTransferSchema, type RecurringTransfer } from "./recurring-transfer.js";

/** Defines the response schema for `/transfer/recurring/get` */
export type TransferRecurringGetResponse = {
  /** Represents a recurring transfer within the Transfers API. */
  recurringTransfer: RecurringTransfer;
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const transferRecurringGetResponseSchema: Schema<TransferRecurringGetResponse> =
  s.object<TransferRecurringGetResponse>({
    recurringTransfer: recurringTransferSchema,
    requestId: s.string(),
    _keysMap: {
      recurringTransfer: "recurring_transfer",
      requestId: "request_id",
    },
  });
