import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { bankTransferEventSchema, type BankTransferEvent } from "./bank-transfer-event.js";

export type BankTransferEventSyncResponse = {
  bankTransferEvents: BankTransferEvent[];
  requestId: string;
};

export const bankTransferEventSyncResponseSchema: Schema<BankTransferEventSyncResponse> =
  s.object<BankTransferEventSyncResponse>({
    bankTransferEvents: s.array(s.lazy(() => bankTransferEventSchema)),
    requestId: s.string(),
    _keysMap: {
      bankTransferEvents: "bank_transfer_events",
      requestId: "request_id",
    },
  });
