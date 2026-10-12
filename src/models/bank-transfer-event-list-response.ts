import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferEventSchema, type BankTransferEvent } from "./bank-transfer-event.js";

/** Defines the response schema for `/bank_transfer/event/list` */
export type BankTransferEventListResponse = {
  bankTransferEvents: BankTransferEvent[];
  /**
   * A unique identifier for the request, which can be used for troubleshooting. This identifier,
   * like all Plaid identifiers, is case sensitive.
   */
  requestId: string;
};

export const bankTransferEventListResponseSchema: Schema<BankTransferEventListResponse> =
  s.object<BankTransferEventListResponse>({
    bankTransferEvents: s.array(s.lazy(() => bankTransferEventSchema)),
    requestId: s.string(),
    _keysMap: {
      bankTransferEvents: "bank_transfer_events",
      requestId: "request_id",
    },
  });
