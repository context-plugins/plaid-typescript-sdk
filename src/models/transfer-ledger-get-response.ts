import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { transferLedgerBalanceSchema, type TransferLedgerBalance } from "./transfer-ledger-balance.js";

export type TransferLedgerGetResponse = {
  ledgerId: string;
  balance: TransferLedgerBalance;
  name: string;
  isDefault: boolean;
  requestId: string;
};

export const transferLedgerGetResponseSchema: Schema<TransferLedgerGetResponse> =
  s.object<TransferLedgerGetResponse>({
    ledgerId: s.string(),
    balance: transferLedgerBalanceSchema,
    name: s.string(),
    isDefault: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      ledgerId: "ledger_id",
      isDefault: "is_default",
      requestId: "request_id",
    },
  });
