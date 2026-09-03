import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TransferLedgerGetRequest = {
  clientId?: string;
  secret?: string;
  ledgerId?: string | null;
  originatorClientId?: string | null;
};

export const transferLedgerGetRequestSchema: Schema<TransferLedgerGetRequest> =
  s.object<TransferLedgerGetRequest>({
    clientId: s.optional(s.string()),
    secret: s.optional(s.string()),
    ledgerId: s.optionalNullable(s.string()),
    originatorClientId: s.optionalNullable(s.string()),
    _keysMap: {
      clientId: "client_id",
      ledgerId: "ledger_id",
      originatorClientId: "originator_client_id",
    },
  });
